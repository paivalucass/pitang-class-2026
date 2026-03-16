import { createFileRoute } from "@tanstack/react-router";
import { redirectIfNotAuthenticated } from "@/lib/auth-guard";

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: () => {
      redirectIfNotAuthenticated();
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/"!</div>;
}
