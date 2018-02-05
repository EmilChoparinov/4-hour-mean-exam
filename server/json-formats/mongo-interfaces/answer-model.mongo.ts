
// DEPENDENCIES
import * as mongoose from 'mongoose';
import { IAnswer } from '../backend-interfaces/answer.backend';

/**
 * interfaces for capturing and modifying user data recieved
 * from the database
 */
export interface IAnswerModel extends mongoose.Document, IAnswer {

}
