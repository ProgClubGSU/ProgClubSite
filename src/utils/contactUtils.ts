import type { ContactMethod, ContactInfo } from "@/data/contactData";

// Group contact methods by primary status (primary first)
export function groupContactMethods(contacts: ContactMethod[]): ContactMethod[] {
	return [...contacts].sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0));
}

// Validate that the contact data matches the expected structure
export function validateContactData(data: ContactInfo): boolean {
	if (!data || !Array.isArray(data.socialMedia) || !Array.isArray(data.officialChannels)) return false;
	const isValidMethod = (m: any) =>
		typeof m.platform === "string" &&
		typeof m.handle === "string" &&
		typeof m.url === "string" &&
		typeof m.icon === "string" &&
		typeof m.description === "string";
	return (
		data.socialMedia.every(isValidMethod) &&
		data.officialChannels.every(isValidMethod)
	);
}

// Get the primary contact method (first with primary: true)
export function getPrimaryContact(contacts: ContactMethod[]): ContactMethod | undefined {
	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i].primary) {
			return contacts[i];
		}
	}
	return undefined;
}

// Get all social media URLs
export function getAllSocialLinks(contacts: ContactMethod[]): string[] {
	return contacts.map((c) => c.url);
}
