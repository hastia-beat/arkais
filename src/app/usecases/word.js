class WordUsecase {
    constructor() { }

    // fetch data from API
    async fetchWords(query) {
        const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/words?search=${query}`);
        return await response.json();
    }
}

export default WordUsecase;