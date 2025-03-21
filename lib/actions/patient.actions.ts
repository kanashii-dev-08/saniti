"use server";

import { ID, Query } from "node-appwrite";
import { appwriteConfig, createAdminClient } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
	const { users } = await createAdminClient();
	try {
		const newUser = await users.create(
			ID.unique(),
			user.email,
			user.phone,
			"",
			user.name
		);
		console.log({ newUser });
		return parseStringify(newUser);
	} catch (error: any) {
		if (error && error?.code === 409) {
			const documents = await users.list([Query.equal("email", [user.email])]);

			return documents?.users[0];
		}
	}
};
