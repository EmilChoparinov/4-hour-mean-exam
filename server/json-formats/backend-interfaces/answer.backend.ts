import { IUser } from "./user.backend";
import { IQuestion } from "./question.backend";

export interface IAnswer {
    content: string;
    details: string;
    poster: IUser;
    question: IQuestion;
    likes: number;
}

export class Answer implements IAnswer {
    content: string;
    details: string;
    poster: IUser;
    question: IQuestion;
    likes: number;

}