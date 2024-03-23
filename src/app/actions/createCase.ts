'use server';

import { revalidatePath } from "next/cache";

export const handleCreateCase = async (formData: FormData) => {

    const dni = formData.get('dni');
    const stage = formData.get('stage');

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/case`, {
            method: 'POST',
            body: JSON.stringify({ dni, stage }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return data.error
        }
        console.log(data)
        revalidatePath('/dashboard/gestion-casos');
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        }
    }

}