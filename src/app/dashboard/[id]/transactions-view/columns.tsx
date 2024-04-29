"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Transaction = {
  transaction_id: number;
  transaction_name: string;
  transaction_type: string;
  transaction_date: string;
  amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transaction_id",
    header: "ID",
  },
  {
    accessorKey: "transaction_name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transaction_type",
    header: "Type",
  },

  {
    accessorKey: "transaction_date",
    header: "Date",
  },
];
