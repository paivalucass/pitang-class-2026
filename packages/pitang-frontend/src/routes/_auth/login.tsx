import { createFileRoute } from "@tanstack/react-router";
import { redirectIfAuthenticated } from "@/lib/auth-guard";

import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_auth/login")({
  beforeLoad: () => {
    redirectIfAuthenticated();
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { handleLogin } = useAuth();

  return <LoginForm onSubmit={handleLogin} />;
}
