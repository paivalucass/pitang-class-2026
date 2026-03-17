import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="place-items-center text-3xl leading-none font-semibold">
              :P
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Pitang Happy Class Shop</div>
              <div className="text-xs text-muted-foreground">
                The Happiness you need. 
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Sign up</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 sm:px-8">
        <section className="flex min-h-[calc(100dvh-64px)] items-center justify-center py-20 sm:py-24">
          <div className="w-full">
            <FieldGroup className="mx-auto max-w-3xl items-center text-center gap-10">

              <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
                Happier Shopping with Pitang Shop :P
              </h1>

              <p className="text-balance text-base text-muted-foreground sm:text-lg">
                Pitang Happy Class Shop is your fictional ecommerce store for
                everyday essentials and happier consumption.
              </p>

              <div className="mt-4 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button size="lg" className="py-4 px-6" asChild>
                  <Link to="/register">Create your account</Link>
                </Button>
                <Button size="lg" variant="outline" className="py-4 px-6" asChild>
                  <Link to="/login">I already have an account</Link>
                </Button>
              </div>

              <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border bg-card p-5 text-left">
                  <div className="text-base font-semibold">Happier products</div>
                  <div className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                    A Happy catalog that’s easy to browse and compare.
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-5 text-left">
                  <div className="text-base font-semibold">Happier checkout</div>
                  <div className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                    Minimal steps and quick confirmation for your Happiness.
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-5 text-left">
                  <div className="text-base font-semibold">Happier tracking</div>
                  <div className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                    Stay updated and Happy from purchase to delivery.
                  </div>
                </div>
              </div>
            </FieldGroup>
          </div>
        </section>
      </main>
    </div>
  );
}
