import {Request, Response} from "express";
// import { TimeLike } from "fs";

export type IQuestion = {
  questionContents: string;
  questionHyperlink?: string;
  userId: number;
  answered: boolean;
  inTrash: boolean;
  inCollection: boolean;
  // uploadTime: TimeLike;
  uploadTime: Date;
  id: number;
}

// export type User = {
//   userRingcardName: string;
//   username: string;
//   password: string;
//   userEmail: string;
// }