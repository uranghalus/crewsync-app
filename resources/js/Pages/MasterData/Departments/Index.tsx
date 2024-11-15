import { Button } from "@/components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { DataTable } from "@/Components/ui/data-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { columns } from "./columns";

interface Department {
    id: number;
    name: string;
    code: string;
}

interface DepartmentTableProps {
    departments: {
        data: Department[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const Index: React.FC<DepartmentTableProps> = ({ departments }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Departement
                </h2>
            }
        >
            <Head title="Department" />
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <DataTable columns={columns} data={departments.data} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
