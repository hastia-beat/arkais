class CollectionUsecase {
    constructor() { }

    async createCollection(data) {
        const body = {
            email: data.email,
            wordId: data.wordId,
        };

        const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/collections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (response.status === 409) {
            return { error: "Kata sudah ada di koleksi" };
        }

        if (!response.ok) {
            throw new Error('Gagal menambahkan ke koleksi');
        }

        return await response.json();
    }

    async fetchCollection(email, page = 1, limit = 10) {
        const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/collections?email=${email}&page=${page}&limit=${limit}`);

        if (!response.ok) {
            throw new Error(`Gagal mengambil koleksi: ${response.statusText}`);
        }

        try {
            return await response.json();
        } catch (error) {
            throw new Error('Respons dari server tidak dalam format JSON');
        }
    }
}

export default CollectionUsecase;
