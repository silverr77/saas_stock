"use client";

import { File, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";

import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { AddProduct } from "./_components/add-product";

export default function Products() {
  const products = [
    {
      name: "samsung",
      picture: "",
      description:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      price: 100,
      cost: 85,
      createdAt: "28/04/2024",
    },
    {
      name: "iphone 15",
      picture: "",
      description:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      price: 100,
      cost: 85,
      createdAt: "28/04/2024",
    },
    {
      name: "iam 10dh",
      picture: "",
      description:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      price: 100,
      cost: 85,
      createdAt: "28/04/2024",
    },
  ];
  return (
    <div className="grid flex-1 items-start p-6">
      <CardTitle>Products</CardTitle>
      <CardDescription>
        Manage your products and view their sales performance.
      </CardDescription>
      <div className="ml-auto flex items-center gap-2">
        <Button size="sm" variant="outline" className="h-7 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Export
          </span>
        </Button>
        <AddProduct />
      </div>
      <div>
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
