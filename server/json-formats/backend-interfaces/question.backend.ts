import { IAnswer } from "./answer.backend";

export interface IQuestion {
    content: string;
    details: string;
    answers: Array<IAnswer>
}

export class Question implements IQuestion {
    content: string;
    details: string;
    answers: IAnswer[];

}