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
            <DialogTrigger>
                <div className='relative '>
                    <div className='absolute top-0 flex w-full justify-center'>
                        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                    </div>
                    <div className='flex h-full items-center justify-center rounded border border-gray-800 bg-gradient-to-b from-cyan-950 to-[#191C1D] px-3 py-2 font-medium'>
                        CONSULTA TU CASO
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-950">
                <DialogHeader className="pt-5">
                    <DialogTitle className="text-start text-base lg:text-lg text-cyan-800">Consulta el estado de tu caso en tiempo real</DialogTitle>
                    <div className="text-sm">
                        <FormCase />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}
