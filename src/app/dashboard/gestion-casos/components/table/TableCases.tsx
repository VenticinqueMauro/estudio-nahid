import InfoCases from "../info/InfoCases";
import NavbarGestionCasos from "../navbar/Navbar.gestionCasos";
import { CaseTable, columns } from "./Columns";
import { DataTable } from "./Data-table";

async function getData(): Promise<CaseTable[]> {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/case`, {cache: 'no-store'})

    const data = await response.json();


    return data.map((item: any) => ({
        id: item._id,
        dni: item.dni,
        stage: item.stage,
        title: item.stageMessage?.title,
        observation: item.observation || '-'
    }));
}

export default async function TableCases() {
    const data = await getData()

    return (
        <div className="lg:px-6">
            <NavbarGestionCasos />
            <InfoCases data={data} />
            <DataTable columns={columns} data={data} />
        </div>
    )
}
