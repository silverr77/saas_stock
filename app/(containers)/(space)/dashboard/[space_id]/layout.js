import { Sidebar } from "./_components/sidebar";
export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar>{children}</Sidebar>
    </section>
  );
}
