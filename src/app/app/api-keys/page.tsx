import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ApiKeysPage() {
  return (
    <main className="p-6 text-white">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-xl font-semibold">API Keys</h1>
          <p className="mt-1 text-sm text-white/60">
            Create keys to call the analyzer from your own apps.
          </p>
        </div>
        <Button>Create key</Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Key name</div>
          <div className="mt-1 text-base font-semibold">Default</div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-white/70">
            rg_live_••••••••••••••••••••
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              Copy
            </Button>
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              Revoke
            </Button>
          </div>
        </Card>

        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Notes</div>
          <div className="mt-2 text-sm text-white/60">
            In a real SaaS, this would be stored hashed in the database and shown only once.
          </div>
        </Card>
      </div>
    </main>
  );
}
