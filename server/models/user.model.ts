
// DEPENDENCIES
import * as mongoose from 'mongoose';
import { IUserModel } from '../json-formats/mongo-interfaces/user-model.mongo';


// defines the user schema model that will be the base format 
// for the user collection
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: [3, 'name must be at least 3 characters long'],
        maxlength: [255, 'name cannot be longer than 255'],
    },

}, { timestamps: true });

// adds the schema as a collection
mongoose.model('user', UserSchema);
