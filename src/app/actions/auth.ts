"use server";

import { redirect } from "next/navigation";

export async function emailCheck(formData: FormData) {
	const email = formData.get("email");

	if (!email || typeof email !== "string") {
		return { error: "Please provide a valid email address." };
	}

	// TODO: Implement your magic link logic here
	// This is where you'd typically send the email with the magic link
	console.log(`Magic link sent to: ${email}`);

	// For demonstration purposes, we'll just redirect to a success page
	redirect("/auth/check-email");
}
