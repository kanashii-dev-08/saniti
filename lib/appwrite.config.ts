import { Client, Databases, Messaging, Users, Storage } from "node-appwrite";

export const appwriteConfig = {
	endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
	projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
	databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
	patientCollectionId: process.env.NEXT_PUBLIC_APPWRITE_PATIENT_COLLECTION!,
	doctorCollectionId: process.env.NEXT_PUBLIC_APPWRITE_DOCTOR_COLLECTION!,
	appointmentCollectionId:
		process.env.NEXT_PUBLIC_APPWRITE_APPOINTMENT_COLLECTION!,
	bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
	secretKey: process.env.NEXT_APPWRITE_KEY!,
};

export async function createAdminClient() {
	const client = new Client()
		.setEndpoint("endpointUrl")
		.setProject("projectId")
		.setKey("secretKey");

	return {
		get databases() {
			return new Databases(client);
		},
		get storage() {
			return new Storage(client);
		},
		get messaging() {
			return new Messaging(client);
		},
		get users() {
			return new Users(client);
		},
	};
}
