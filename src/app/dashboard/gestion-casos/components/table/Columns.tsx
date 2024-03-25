"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, MoreHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ModalEdit from "../form-cases/Modal.Edit"
import ModalDelete from "../form-cases/Modal.Delete"

export type CaseTable = {
    id: string
    dni: string
    stage: number,
    title: string
    observation: string
}


export const columns: ColumnDef<CaseTable>[] = [
    {
        accessorKey: "dni",
        header: ({ column }) => {
            return (
                <button
                    className='flex items-center'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    DNI
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
            )
        },
    },
    {
        accessorKey: "stage",
        header: ({ column }) => {
            return (
                <button
                    className='flex items-center'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Etapa
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
            )
        },
    },
    {
        accessorKey: "title",
        header: "Titulo",
    },
    {
        accessorKey: "observation",
        header: "Obersaciones",
    },
    {
        accessorKey: "Acciones",
        cell: ({ row }) => {
            const caseRow = row.original
            return (
                <div className="flex gap-4 items-center">
                    <ModalEdit caseRow={caseRow} />
                    <ModalDelete caseRow={caseRow} />
                </div>
            )
        },
    },
]

    // <DropdownMenuItem className="cursor-pointer z-10 focus:bg-zinc-100 rounded">
    //     <Trash2 size={18} className="mr-2 text-red-400" />
    //     Eliminar
    // </DropdownMenuItem>