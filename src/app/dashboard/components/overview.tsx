"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },

  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview() {
  type UserData = {
    firstName: string;
    lastName: string;
    balance: number;
    totalDeposited: number;
    totalWithdrawn: number;
  };

  type GraphData = {
    name: string;
    total: number;
    expenses: number;
  };

  const [userData, setUserData] = useState<UserData | null>(null);
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  let user = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://cbproject.xyz/api/users/` + user.id);
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user.id]);

  useEffect(() => {
    if (userData) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const newData = months.map((month) => {
        const totalFluctuation = 0.9 + Math.random();
        const expensesFluctuation = 0.9 + Math.random();

        return {
          name: month,
          total: (userData.balance / 12) * totalFluctuation,
          expenses: (userData.totalWithdrawn / 12) * expensesFluctuation,
        };
      });
      setGraphData(newData);
    }
  }, [userData]);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={graphData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: any) => `$${value}`}
        />
        <Legend />

        <Bar
          dataKey="total"
          fill="#166534"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
        <Bar
          dataKey="expenses"
          fill=""
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
