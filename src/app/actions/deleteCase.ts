'use server';

import { revalidatePath } from "next/cache";

export const handleDeleteCase = async (dni: string) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/case/${dni}`, {
            method: 'DELETE',
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