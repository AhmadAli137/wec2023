import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { MainNav } from "@/components/main-nav";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { UserNav } from "@/components/user-nav";

import { ScheduleTab } from "@/components/schedule_tab";
import { WellnessTab } from "@/components/wellness_tab";
import { GoalsTab } from "@/components/goals_tab";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "students assistance dashboard.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
            {/* <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div> */}
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="space-y-4">
              <ScheduleTab></ScheduleTab>
            </TabsContent>

            <TabsContent value="wellness" className="space-y-4">
              <WellnessTab></WellnessTab>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4">
              <GoalsTab></GoalsTab>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
