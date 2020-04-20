import IUser from "./IUser";

export default interface ICourse {
  id: string,
  name: string,
  duration: number,
  date_start: Date,
  users: Array<IUser>,
} 