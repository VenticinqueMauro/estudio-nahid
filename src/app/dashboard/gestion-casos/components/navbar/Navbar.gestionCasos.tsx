import { Trash2 } from "lucide-react";
import ModalCreate from "../form-cases/Modal.Create";
import ButtonDeleteAllCases from "../form-cases/Modal.DeleteAllCases";

export default function NavbarGestionCasos() {

    return (
        <nav className="sticky top-0 left-0 py-6 w-full flex justify-between text-sm bg-white/50 backdrop-blur z-10">
            <ModalCreate />
            <ButtonDeleteAllCases />
        </nav>
    )
}
