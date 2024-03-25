import {
    Drawer,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer"
import dynamic from "next/dynamic"

const CountUp = dynamic(() => import("./CountUp"), { ssr: false, loading: () => <div className="py-10 px-20 w-full h-full block bg-slate-200 animate-pulse"></div> })

export default function CasosDeExito() {
    return (
        <Drawer>
            <DrawerTrigger className="cursor-pointer hover:text-white duration-200 uppercase">
                casos de éxito
            </DrawerTrigger>
            <DrawerContent className="text-zinc-950 px-6 md:px-14 bg-gradient-to-br from-white to-slate-200">
                <div className="mx-auto w-full max-w-7xl">
                    <CountUp />
                </div>
            </DrawerContent>
        </Drawer>

    )
}
