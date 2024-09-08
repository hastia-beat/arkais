class WordUsecase {
    constructor() { }

    // fetch data from API
    async fetchWords(query) {
        const response = await fetch(`${process.env.BACKEND || "https://arkaisedu.vercel.app"}/words?search=${query}`);
        if (!response.ok) {
            throw new Error(`Gagal mengambil kata-kata: ${response.statusText}`);
        }
        return await response.json();
    }
}

export default WordUsecase;
