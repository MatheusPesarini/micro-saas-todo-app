import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AuthForm } from "./_components/auth-form";

export default function AuthPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Card className="w-full max-w-md">
				<CardHeader>
					<div className="text-center">
						<CardTitle>Login</CardTitle>
					</div>
					<div className="text-center">
						<CardDescription>
							Escreva seu e-mail abaixo para realizar o login da sua conta
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent>
					<AuthForm />
				</CardContent>
			</Card>
		</div>
	);
}
