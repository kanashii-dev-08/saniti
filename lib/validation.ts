import { z } from "zod";

export const UserFormValidation = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters.")
		.max(100, "Name must be at most 100 characters."),
	email: z.string().email("Invalid email address."),
	phone: z
		.string()
		.refine((phone) => /^\+63\d{10}$/.test(phone), "Invalid phone number"),
});
