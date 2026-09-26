import { Suspense } from "react";
import MyPlanView from "@/components/MyPlanView";


export const dynamic = "force-dynamic";

export default function MyPlanPage() {
  return (
    <Suspense fallback={<p className="text-muted mx-auto max-w-6xl px-4 py-8 text-sm">Loading…</p>}>
      <MyPlanView />
    </Suspense>
  );
}