import { Trash2 } from "lucide-react";
import ModalCreate from "../form-cases/Modal.Create";

export default function NavbarGestionCasos() {
    return (
        <nav className="sticky top-0 left-0 py-6 w-full flex justify-between text-sm  px-6 bg-white/50 backdrop-blur z-10">
            <ModalCreate />
            <button className="bg-red-300/50 shadow text-red-700 px-3 py-1 rounded hover:bg-red-400/50 flex items-center gap-1">
                <Trash2 size={20} />
                Eliminar todos
            </button>
        </nav>
    )
}
