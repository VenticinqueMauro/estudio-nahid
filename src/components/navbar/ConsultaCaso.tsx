import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
import Link from "next/link"



export default function ConsultaCaso() {
    return (
        <Dialog>
            <DialogTrigger>CONSULTA TU CASO</DialogTrigger>
            <DialogContent className="bg-zinc-200 text-zinc-950 ">
                <DialogHeader>
                    <DialogTitle className="text-xl ">Consulta el estado de tu caso en tiempo real</DialogTitle>
                    <DialogDescription >
                        <span className="">Ingresa tu <b>número de DNI</b> para conocer en qué etapa se encuentra tu proceso legal en solo unos segundos.</span>
                        <div className="flex gap-2 mt-4 mb-2">
                            <Input placeholder="Ej: 45637821" className="w-fit placeholder:text-zinc-500 rounded" />
                            <button className="w-full px-3 py-2 bg-cyan-800 text-white rounded">Consultar</button>
                        </div>
                        <Link href='#' className="text-xs text-cyan-700 hover:text-cyan-800">¿Cuáles son los posibles estados de mi caso?</Link>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
