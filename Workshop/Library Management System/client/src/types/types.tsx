export type IBook = {
    id: string,
    title: string,
    genre: string,
    isbn: string,
    format: string,
    summary: string,
    authors?: string[];
};

export type IAuthor = {
    id: string,
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    address: string;
};