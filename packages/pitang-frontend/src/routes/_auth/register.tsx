import { createFileRoute } from "@tanstack/react-router";
import { redirectIfAuthenticated } from "@/lib/auth-guard";

import { SignupForm } from "@/components/signup-form";

export const Route = createFileRoute("/_auth/register")({
  beforeLoad: () => {
    redirectIfAuthenticated();
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupForm />;
}
