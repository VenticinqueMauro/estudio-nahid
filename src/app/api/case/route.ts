import { connectDB } from "@/lib/mongodb";
import { Case } from "@/models/case.models";
import { Stage, StageMessages } from "@/utils/message.stage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { dni, stage, observation } = await request.json();

        if (!dni || !stage) {
            return NextResponse.json({ error: 'El DNI y la etapa son obligatorios' }, { status: 400 });
        }

        if (stage < 1 || stage > 14) {
            return NextResponse.json({ error: 'Etapa inválida' }, { status: 400 });
        }

        const existingCase = await Case.findOne({ dni });
        if (existingCase) {
            return NextResponse.json({ error: 'Este caso ya ha sido registrado' }, { status: 400 });
        }

        const stageMessages = StageMessages[stage as Stage];
        if (!stageMessages) {
            return NextResponse.json({ error: 'Mensaje de etapa no encontrado' }, { status: 500 });
        }

        const newCaseData = new Case({
            dni,
            stage,
            stageMessage: {
                title: stageMessages.title,
                message: stageMessages.message
            },
            observation
        });

        await newCaseData.save();

        return NextResponse.json({ message: 'Registro de caso exitoso',  }, { status: 201 });

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: `Falló el registro del caso: ${error.message}` }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
        }
    }
}


export async function GET() {
    try {
        await connectDB();

        const cases = await Case.find();

        if (!cases) {
            return NextResponse.json({ error: 'No se encontraron casos' }, { status: 404 });
        }
        return NextResponse.json(cases, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: `Falló la recuperación de casos: ${error.message}` }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
        }
    }
}

export async function DELETE() {
    try {
        await connectDB();

        const deleteResult = await Case.deleteMany();

        if (deleteResult.deletedCount === 0) {
            return NextResponse.json({ message: 'No se encontraron casos' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Todos los casos se eliminaron exitosamente' }, { status: 200 });

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: `Falló la eliminación de casos: ${error.message}` }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
        }
    }
}
