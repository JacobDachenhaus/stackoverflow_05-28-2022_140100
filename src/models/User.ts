import mongoose, { Schema } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
}

export const UserSchema = new Schema<IUser>({
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);
export default User;