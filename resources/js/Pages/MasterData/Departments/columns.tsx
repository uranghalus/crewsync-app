"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
interface Department {
    id: number;
    name: string;
    code: string;
}
export const columns: ColumnDef<Department>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="w-fit">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="w-fit">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    value={row.getValue("id")}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "no",
        header: () => <div className="w-fit bg-red-500">No.</div>,
        cell: ({ row, table }: any) => (
            <div className="bg-red-500 w-fit">
                {table.getSortedRowModel().rows.indexOf(row) + 1}
            </div>
        ),
    },
    {
        accessorKey: "name",
        header: () => <div className="font-bold bg-red-400">Name</div>,
        cell: ({ row }) => (
            <div className="capitalize text-left ">{row.getValue("name")}</div>
        ),
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    row.original.id.toString()
                                )
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
