import { CaseTable } from "../table/Columns";

interface Props {
    data: CaseTable[]
}

export default function InfoCases({ data }: Props) {
    return (
        <div className="text-xs text-zinc-500 flex flex-col gap-1">
            <p><b className="text-zinc-600 ">Casos totales: </b>{data.length}</p>
            <ul className="flex">
                {Array.from(new Set(data.map(caso => caso.stage)))
                    .sort((a, b) => a - b)
                    .map((etapa, i) => (
                        <li key={etapa} className={`border-r ${i === 0 ? 'pr-2' : 'px-2'} border-zinc-200`}>
                            <b className="text-zinc-600">{`Etapa ${etapa}: `}</b>
                            {`${data.filter(caso => caso.stage === etapa).length}`}
                        </li>
                    ))}
            </ul>

        </div>
    )
}
