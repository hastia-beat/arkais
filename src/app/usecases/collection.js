class CollectionUsecase {
    constructor() { }

    async createCollection(data) {
        const body = {
            email: data.email,
            wordId: data.wordId,
        }

        const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/collections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    }

    async fetchCollection(email) {
        const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/collections?email=${email}`);
        return await response.json();
    }
}

export default CollectionUsecase;