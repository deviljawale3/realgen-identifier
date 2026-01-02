import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TeamPage() {
  return (
    <main className="p-6 text-white">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-xl font-semibold">Team</h1>
          <p className="mt-1 text-sm text-white/60">
            Manage members and roles (stub).
          </p>
        </div>
        <Button>Invite member</Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Member</div>
          <div className="mt-1 text-base font-semibold">You</div>
          <div className="mt-2 text-sm text-white/60">Role: Owner</div>
        </Card>
        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Member</div>
          <div className="mt-1 text-base font-semibold">—</div>
          <div className="mt-2 text-sm text-white/60">Invite someone to collaborate.</div>
        </Card>
        <Card className="border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/60">Permissions</div>
          <div className="mt-2 text-sm text-white/60">
            Add RBAC later (Owner/Admin/Analyst/Viewer).
          </div>
        </Card>
      </div>
    </main>
  );
}
