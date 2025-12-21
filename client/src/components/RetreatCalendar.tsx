import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { retreats } from "@/data/retreats";
import { useLocation } from "wouter";

// Sample confirmed programs data - in production, this would come from your backend
const confirmedPrograms = [
    { retreatId: "weekend-reset", startDate: "2025-01-15", endDate: "2025-01-17" },
    { retreatId: "weekend-reset", startDate: "2025-02-05", endDate: "2025-02-07" },
    { retreatId: "week-immersion", startDate: "2025-01-20", endDate: "2025-01-26" },
    { retreatId: "week-immersion", startDate: "2025-03-10", endDate: "2025-03-16" },
    { retreatId: "lifestyle-reset", startDate: "2025-02-01", endDate: "2025-02-14" },
    { retreatId: "lifestyle-reset", startDate: "2025-04-01", endDate: "2025-04-14" },
    { retreatId: "weekend-reset", startDate: "2025-03-21", endDate: "2025-03-23" },
    { retreatId: "week-immersion", startDate: "2025-04-15", endDate: "2025-04-21" },
];

// Color palette for different retreats
const retreatColors: Record<string, { bg: string; border: string; text: string }> = {
    "weekend-reset": {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        border: "border-blue-500",
        text: "text-blue-700 dark:text-blue-300",
    },
    "week-immersion": {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        border: "border-purple-500",
        text: "text-purple-700 dark:text-purple-300",
    },
    "lifestyle-reset": {
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        border: "border-emerald-500",
        text: "text-emerald-700 dark:text-emerald-300",
    },
};

interface CalendarEvent {
    id: string;
    retreatId: string;
    title: string;
    startDate: Date;
    endDate: Date;
    color: { bg: string; border: string; text: string };
}

export default function RetreatCalendar() {
    const [, setLocation] = useLocation();
    const [currentDate, setCurrentDate] = useState(new Date());

    // Convert confirmed programs to calendar events
    const events: CalendarEvent[] = confirmedPrograms.map((program, index) => {
        const retreat = retreats.find((r) => r.id === program.retreatId);
        return {
            id: `${program.retreatId}-${index}`,
            retreatId: program.retreatId,
            title: retreat?.title || "Retreat",
            startDate: new Date(program.startDate),
            endDate: new Date(program.endDate),
            color: retreatColors[program.retreatId] || retreatColors["weekend-reset"],
        };
    });

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get first day of month and number of days
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Generate calendar days
    const calendarDays: (number | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push(i);
    }

    // Get events for a specific day
    const getEventsForDay = (day: number): CalendarEvent[] => {
        const date = new Date(year, month, day);
        return events.filter((event) => {
            return date >= event.startDate && date <= event.endDate;
        });
    };

    // Navigation functions
    const previousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    const handleEventClick = (retreatId: string) => {
        setLocation(`/retreats/${retreatId}`);
    };

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="space-y-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl">
                        {monthNames[month]} {year}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Click on any retreat to view details
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={goToToday}>
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Today
                    </Button>
                    <Button variant="outline" size="icon" onClick={previousMonth}>
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextMonth}>
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 p-4 bg-muted/30 rounded-sm">
                {retreats.slice(0, 3).map((retreat) => {
                    const colors = retreatColors[retreat.id];
                    return (
                        <div key={retreat.id} className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded ${colors.bg} border-2 ${colors.border}`} />
                            <span className="text-sm font-medium">{retreat.title}</span>
                        </div>
                    );
                })}
            </div>

            {/* Calendar Grid */}
            <div className="border border-border rounded-sm overflow-hidden bg-card">
                {/* Day Headers */}
                <div className="grid grid-cols-7 bg-muted/50">
                    {dayNames.map((day) => (
                        <div
                            key={day}
                            className="p-3 text-center text-sm font-semibold text-muted-foreground border-b border-border"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                    {calendarDays.map((day, index) => {
                        const dayEvents = day ? getEventsForDay(day) : [];
                        const isToday =
                            day &&
                            new Date().getDate() === day &&
                            new Date().getMonth() === month &&
                            new Date().getFullYear() === year;

                        return (
                            <div
                                key={index}
                                className={`min-h-[120px] p-2 border-b border-r border-border ${!day ? "bg-muted/20" : "bg-background hover:bg-muted/10"
                                    } ${index % 7 === 6 ? "border-r-0" : ""}`}
                            >
                                {day && (
                                    <>
                                        <div
                                            className={`text-sm font-medium mb-2 ${isToday
                                                    ? "w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
                                                    : "text-foreground"
                                                }`}
                                        >
                                            {day}
                                        </div>
                                        <div className="space-y-1">
                                            {dayEvents.map((event) => (
                                                <button
                                                    key={event.id}
                                                    onClick={() => handleEventClick(event.retreatId)}
                                                    className={`w-full text-left px-2 py-1 rounded text-xs font-medium border-l-2 ${event.color.bg} ${event.color.border} ${event.color.text} hover:opacity-80 transition-opacity cursor-pointer`}
                                                >
                                                    {event.title}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Upcoming Retreats List */}
            <div className="space-y-4">
                <h3 className="font-serif text-2xl">Upcoming Retreats</h3>
                <div className="space-y-3">
                    {events
                        .filter((event) => event.startDate >= new Date())
                        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
                        .slice(0, 5)
                        .map((event) => (
                            <button
                                key={event.id}
                                onClick={() => handleEventClick(event.retreatId)}
                                className={`w-full p-4 rounded-sm border-l-4 ${event.color.bg} ${event.color.border} hover:shadow-md transition-shadow cursor-pointer text-left`}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className={`font-semibold ${event.color.text}`}>
                                            {event.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {event.startDate.toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}{" "}
                                            -{" "}
                                            {event.endDate.toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                </div>
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}
