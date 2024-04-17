import mongoose from 'mongoose';
declare const Model: mongoose.PassportLocalModel<mongoose.Document<any, any, any>>;
declare global {
    export type UserDocument = mongoose.Document & {
        username: String;
        EmailAddress: String;
        DisplayName: String;
    };
}
export default Model;
