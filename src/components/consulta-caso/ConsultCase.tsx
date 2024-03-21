import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import FormCase from "./FormCase";

export default function ConsultCase() {


    return (
        <Dialog>
            <DialogTrigger>CONSULTA TU CASO</DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-950 ">
                <DialogHeader>
                    <DialogTitle className="text-lg text-cyan-800">Consulta el estado de tu caso en tiempo real</DialogTitle>
                    <div className="text-sm">
                        <FormCase />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
