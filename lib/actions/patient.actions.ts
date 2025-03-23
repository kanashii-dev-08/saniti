"use server";

import { ID, Query, Users } from "node-appwrite";
import { appwriteConfig, createAdminClient } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
	const { users } = await createAdminClient();
	try {
		const newUser = await users.create(
			ID.unique(),
			user.email,
			user.phone,
			"Testing@12345",
			user.name
		);
		console.log({ newUser });
		return parseStringify(newUser);
	} catch (error: any) {
		if (error && error?.code === 409) {
			const existingUser = await users.list([
				Query.equal("email", [user.email]),
			]);

			return existingUser?.users[0];
		}
	}
};

export const getUser = async (userId: string) => {
	const { users } = await createAdminClient();
	try {
		const user = await users.get(userId);
		return parseStringify(user);
	} catch (error) {
		console.log(error);
	}
};
