export type ICourse = {
    title: string,
    faculty: string,
    code: string,
    rating: number;
    reviews: IReview[];
    id?: string;
};

export type IReview = {
    id?: string;
    name: string,
    rating: number,
    comment: string;
};