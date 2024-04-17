import mongoose, { Document } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    DisplayName: String,
    EmailAddress: String,
    Username: String,
    Created: {
        type: Date,
        default: Date.now(),
    },
    Updated: {
        type: Date,
        default: Date.now(),
    },
});

// Extiende el esquema del usuario con PassportLocalMongoose
UserSchema.plugin(passportLocalMongoose);

// Define el tipo de documento para el usuario
export interface UserDocument extends Document {
    DisplayName: string;
    EmailAddress: string;
    Username: string;
    Created: Date;
    Updated: Date;
    // Agrega cualquier otra propiedad que necesites para Passport
}

// Exporta el modelo de usuario
export default mongoose.model<UserDocument>("User", UserSchema);
