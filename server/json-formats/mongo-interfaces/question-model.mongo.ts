
// DEPENDENCIES
import * as mongoose from 'mongoose';
import { IQuestion } from '../backend-interfaces/question.backend';

/**
 * interfaces for capturing and modifying user data recieved
 * from the database
 */
export interface IQuestionModel extends mongoose.Document, IQuestion {

}
