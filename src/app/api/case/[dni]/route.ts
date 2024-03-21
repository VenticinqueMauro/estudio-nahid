import { connectDB } from "@/lib/mongodb";
import { Case } from "@/models/case.models";
import { Stage, StageMessages } from "@/utils/message.stage";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { dni: string } }) {

    const dni = params.dni;

    try {
        await connectDB();

        const caseData = await Case.findOne({ dni });

        if (!caseData) {
            return NextResponse.json({ error: 'Caso no encontrado' }, { status: 404 });
        } else {
            return NextResponse.json(caseData, { status: 200 });
        }
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: `Falló la consulta del caso: ${error.message}` }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
        }
    }
}

export async function PATCH(request: NextRequest, { params }: { params: { [key: string]: string } }) {
    const dni = params.dni;

    try {
        await connectDB();

        const caseData = await Case.findOne({ dni });

        if (!caseData) {
            return NextResponse.json({ error: 'Caso no encontrado' }, { status: 404 });
        }

        const { stage, observation } = await request.json();

        if (stage) {
            if (stage < 1 || stage > 14) {
                return NextResponse.json({ error: 'Etapa inválida' }, { status: 400 });
            }
            caseData.stage = stage;
            caseData.stageMessage = StageMessages[stage as Stage];
        }

        if (observation && observation.length > 0) {
            caseData.observation = observation;
        }

        await caseData.save();

        return NextResponse.json({ message: 'Actualización del caso exitosa' }, { status: 200 });

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: `Falló la actualización del caso: ${error.message}` }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
        }
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { dni: string } }) {
    const dni = params.dni;

    try {
        await connectDB();

        const caseData = await Case.findOneAndDelete({ dni });

        if (!caseData) {
            return NextResponse.json({ error: 'Caso no encontrado' }, { status: 404 });
        } else {
            return NextResponse.json({ message: 'Eliminación del caso exitosa' }, { status: 200 });
        }

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: `Falló la eliminación del caso: ${error.message}` }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
        }
    }
}
