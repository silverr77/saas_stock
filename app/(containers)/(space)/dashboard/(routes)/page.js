import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  return <div>Dashboard page Space : {JSON.stringify(session)}</div>;
};

export default Dashboard;
