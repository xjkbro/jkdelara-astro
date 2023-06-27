import { ref, get, set } from "firebase/database";
import { database } from "./firebase";
// import { database } from "../firebase/client";

export async function getViews(type: string, slug: string) {
	const dbRef = ref(database, `views/${type}/${slug}`);
	const snapshot = await get(dbRef);
	return snapshot.val();
}
export async function updateView(type: string, slug: string) {
	const dbRef = ref(database, `views/${type}/${slug}`);
	const snapshot = await get(dbRef);
	if (snapshot.exists()) {
		await set(dbRef, snapshot.val() + 1);
	} else {
		await set(dbRef, 1);
	}
	return snapshot.val() + 1;
}
