import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import HttpStatusCode from '../HttpStatusCode';

export default abstract class ResourceController<T> {
  protected abstract model: Model<T>;

  public List(req: Request, res: Response, next: NextFunction) {
    this.model.find({}, (err: any, docs: T[]) => {
      if (err) { return next(err); }
      res.status(HttpStatusCode.Ok).json({ data: docs });
    });
  }
}