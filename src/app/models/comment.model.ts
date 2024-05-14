export class CommentModel {
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
    postId: number;
    userId: number;
}