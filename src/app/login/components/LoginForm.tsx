'use client';

import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

export default function LoginForm() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                router.push('/dashboard')
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="space-y-5 max-w-lg shadow shadow-cyan-900 border border-gray-800 bg-gradient-to-b from-cyan-950/50 to-[#191C1D]/50 backdrop-blur p-10 rounded mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-white">Inicia sesión en tu cuenta</h1>
            <h2 className="text-sm text-gray-300">Ingresa tu correo electrónico y contraseña</h2>
            <div className="space-y-3">
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="w-full placeholder-gray-400 rounded border-gray-500 focus:border-cyan-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Contraseña"
                        className="w-full placeholder-gray-400 rounded border-gray-500 focus:border-cyan-600"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <Eye size={20} className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center text-zinc-200 focus:outline-none z-10" onClick={togglePasswordVisibility} />
                    ) : (
                        <EyeOff size={20} className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center text-zinc-200 focus:outline-none z-10" onClick={togglePasswordVisibility} />
                    )}
                </div>
                <button className={`w-full px-3 py-2 bg-cyan-800 hover:bg-cyan-700 text-white rounded ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`} type="submit" disabled={isLoading}>
                    {isLoading ? 'Cargando...' : 'Entrar'}
                </button>
            </div>
        </form>
    );
}
