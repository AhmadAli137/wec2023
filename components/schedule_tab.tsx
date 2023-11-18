"use client";

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
import { RecentSales } from "@/components/recent-sales";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { UserNav } from "@/components/user-nav";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

export function ScheduleTab() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 h-full">
        <Card className="col-span-4 flex flex-col">
          <CardContent className="flex-grow flex flex-col items-center justify-center p-2">
            <div className="w-full flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            {/* <CardDescription>You made 265 sales this month.</CardDescription> */}
          </CardHeader>
          <CardContent>
          <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
