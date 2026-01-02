import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <main className="p-6 text-white">
      <div>
        <h1 className="text-xl font-semibold">Settings</h1>
        <p className="mt-1 text-sm text-white/60">Workspace settings (stub).</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Workspace name</div>
          <input
            className="mt-2 h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
            defaultValue="RealGen Workspace"
          />
          <div className="mt-4">
            <Button>Save</Button>
          </div>
        </Card>

        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Security</div>
          <div className="mt-2 text-sm text-white/60">
            Add 2FA, session controls, and audit logs later.
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              Enable 2FA
            </Button>
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              View audit logs
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
