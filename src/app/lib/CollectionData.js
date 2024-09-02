import { authUserSession } from "@/app/lib/auth-libs";
import CollectionUsecase from "@/app/usecases/collection";

export async function fetchCollectionData() {
    const user = await authUserSession();
    const collectionUsecase = new CollectionUsecase();

    try {
        const collections = await collectionUsecase.fetchCollection(user?.email);
        return { user, collections };
    } catch (error) {
        console.error("Error fetching collections:", error.message);
        return { user, collections: [] };
    }
}
