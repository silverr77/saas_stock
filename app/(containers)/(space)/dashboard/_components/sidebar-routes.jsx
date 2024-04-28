"use client";

import { Layout, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Package,
    label: "Products",
    href: "/dashboard/products",
  },
  {
    icon: ShoppingCart,
    label: "Orders",
    href: "/dashboard/orders",
  },
  {
    icon: Users,
    label: "Customers",
    href: "/dashboard/customers",
  },
  {
    icon: LineChart,
    label: "Analytics",
    href: "/dashboard/analytics",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          Icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
