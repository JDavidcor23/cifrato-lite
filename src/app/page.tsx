import {
  DashboardHeader,
  DashboardMainActions,
  DashboardSetupSteps,
  DashboardRecentActivity
} from "@/features/view-dashboard/components";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col pt-10 pb-24 px-6 gap-8">
      <DashboardHeader />
      
      <div className="space-y-8 flex-1">
        <DashboardMainActions />
        <DashboardSetupSteps />
        <DashboardRecentActivity />
      </div>
    </div>
  );
}
