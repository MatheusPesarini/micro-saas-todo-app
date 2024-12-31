"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailCheck } from "../../actions/auth";

export function AuthForm() {
	const [error, setError] = useState<string | null>(null);
	const { pending } = useFormStatus();

	async function handleSubmit(formData: FormData) {
		const result = await emailCheck(formData);
		if (result?.error) {
			setError(result.error);
		}
	}

	return (
		<form action={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Input
					type="email"
					name="email"
					placeholder="Digite seu e-mail"
					required
					className="w-full"
				/>
				{error && <p className="text-sm text-red-500">{error}</p>}
			</div>
			<Button type="submit" className="w-full" disabled={pending}>
				{pending ? "Enviando..." : "Logar"}
			</Button>
		</form>
	);
}
