import { FC } from "react";
import { DataTable } from "./data-table";
import { Transaction, columns } from "./columns";

const data: Transaction[] = [
  {
    transaction_id: 1,
    transaction_name: "Food",
    transaction_type: "Groceries",
    transaction_date: "04-28-2024",
    amount: 100,
  },
  {
    transaction_id: 2,
    transaction_name: "Water Bill",
    transaction_type: "Utilites",
    transaction_date: "04-28-2024",
    amount: 200,
  },
  {
    transaction_id: 3,
    transaction_name: "Tuition",
    transaction_type: "Misc",
    transaction_date: "04-28-2024",
    amount: 5467,
  },
  {
    transaction_id: 4,
    transaction_name: "McDonalds",
    transaction_type: "Dining",
    transaction_date: "04-28-2024",
    amount: 384,
  },
  {
    transaction_id: 5,
    transaction_name: "Movie",
    transaction_type: "Entertainment",
    transaction_date: "04-28-2024",
    amount: 40,
  },
  {
    transaction_id: 5,
    transaction_name: "Pedicare",
    transaction_type: "Personal Care",
    transaction_date: "04-28-2024",
    amount: 120,
  },
  {
    transaction_id: 5,
    transaction_name: "Uber",
    transaction_type: "Transportation",
    transaction_date: "04-28-2024",
    amount: 46,
  },
];

const page = ({}) => {
  return (
    <div className="container mx-auto items-center justify-center py-40">
    <DataTable columns={columns} data={data} />
  </div>
  );
};

export default page;
