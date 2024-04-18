import { UserModel } from "./user.model";

export class PostModel {
    id?: string;
    createdAt: Date;
    text: string;
    likesCount: number;
    commentsCount: number;
    imagePosterUrl: string;
    interests: number
    author: UserModel
}