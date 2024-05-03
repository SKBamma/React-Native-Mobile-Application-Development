export type Book = {
    id: string,
    title: string,
    genre: string,
    isbn: string,
    format: string,
    summary: string,
    authors?: string[];

};

export type Author = {
    id: string,
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    address: string;
};