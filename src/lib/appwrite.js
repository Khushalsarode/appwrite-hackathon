// src/lib/appwrite.js
import { Client, Account, Databases, Storage, Functions, ID, AuthenticatorType, Messaging } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('id'); // Your Appwrite project ID

// Export commonly used Appwrite services
export const account = new Account(client);         // For user authentication
export const databases = new Databases(client);     // For database operations
export const storage = new Storage(client);         // For file storage
export const functions = new Functions(client);     // For cloud functions execution
export const messaging = new Messaging(client);     // For messaging/email functionality

export { AuthenticatorType, client, ID };
