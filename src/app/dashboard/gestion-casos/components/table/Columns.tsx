"use client"

import { ColumnDef } from "@tanstack/react-table"


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
        header: "DNI",
    },
    {
        accessorKey: "stage",
        header: "Etapa",
    },
    {
        accessorKey: "title",
        header: "Titulo",
    },
    {
        accessorKey: "observation",
        header: "Obersaciones",
    },
]
