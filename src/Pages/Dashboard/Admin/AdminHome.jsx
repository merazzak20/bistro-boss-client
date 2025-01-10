import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxioxSecure from "../../../hooks/useAxioxSecure";
import { FaBorderAll, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxioxSecure();
  const { data: states = {} } = useQuery({
    queryKey: ["admin-states"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-states"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-states");
      return res.data;
    },
  });

  //   chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //   Pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      <h2 className="text-4xl font-semibold">
        <span>Welcome </span>
        {user.displayName ? user.displayName : "Buddy"}
      </h2>
      <div className="stats shadow my-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaWallet className="text-4xl text-orange-400"></FaWallet>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value">${states.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl text-orange-400"></FaUsers>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{states?.users}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUtensils className="text-4xl text-orange-400"></FaUtensils>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{states?.menuItems}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBorderAll className="text-4xl text-orange-400"></FaBorderAll>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{states?.orders}</div>
        </div>
      </div>
      <div className="flex bg-white items-center">
        {/* Chart */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        {/* Pie Chart */}
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
