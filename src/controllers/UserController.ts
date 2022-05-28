import ResourceController from './ResourceController';
import User, { IUser } from '../models/User';

export default class UserController extends ResourceController<IUser> {
  protected model = User;
}