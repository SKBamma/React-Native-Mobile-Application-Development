export type IBook = {
    id: string,
    title: string,
    genre: string,
    isbn: string,
    format: string,
    summary: string,
    authors?: string[];
};