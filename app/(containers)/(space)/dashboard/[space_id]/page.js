import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Dashboard = async ({ params }) => {
  const session = await auth();
  return (
    <div>
      Dashboard page Space : {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/sign-in",
          });
        }}
      >
        <Button type="submit">Sing out</Button>
      </form>
    </div>
  );
};

export default Dashboard;
