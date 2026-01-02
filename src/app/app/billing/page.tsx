import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  return (
    <main className="p-6 text-white">
      <div>
        <h1 className="text-xl font-semibold">Billing</h1>
        <p className="mt-1 text-sm text-white/60">
          Billing shell (stub). Wire Stripe later.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Plan</div>
          <div className="mt-1 text-base font-semibold">Community (Free)</div>
          <div className="mt-2 text-sm text-white/60">Self-hosted open-source.</div>
          <div className="mt-4">
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              Change plan
            </Button>
          </div>
        </Card>

        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Usage</div>
          <div className="mt-1 text-3xl font-bold">0</div>
          <div className="mt-2 text-sm text-white/60">Requests this month (stub).</div>
        </Card>

        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Payment method</div>
          <div className="mt-2 text-sm text-white/60">
            Add card management + invoices later.
          </div>
          <div className="mt-4">
            <Button>Add payment method</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
