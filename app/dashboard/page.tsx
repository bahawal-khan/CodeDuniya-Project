import type { Metadata } from "next";
import { DashboardInner } from "./dashboard-inner";

export const metadata: Metadata = {
  title: "Dashboard — CodeDuniya",
  description: "Apni streak, XP, badges aur progress dekho — har roz ka thora sa progress, badi tabdeeli laata hai.",
};

export default function DashboardPage() {
  return <DashboardInner />;
}
