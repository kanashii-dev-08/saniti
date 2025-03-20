import * as sdk from "node-appwrite";

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

const client = new sdk.Client()
	.setEndpoint(appwriteConfig.endpointUrl)
	.setProject(appwriteConfig.projectId)
	.setKey(appwriteConfig.secretKey);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
