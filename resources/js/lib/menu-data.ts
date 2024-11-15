import {
    BookOpen,
    Bot,
    CircleGauge,
    DatabaseIcon,
    Frame,
    Settings2,
    SquareTerminal,
} from "lucide-react";

export const menu = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: CircleGauge,
        },
        {
            title: "Data Master",
            url: "#",
            icon: DatabaseIcon,
            isActive: true,
            items: [
                {
                    title: "Departemen",
                    url: "/master-data/department",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
        {
            title: "Design Engineering",
            url: "#",
            icon: Frame,
        },
    ],
};
