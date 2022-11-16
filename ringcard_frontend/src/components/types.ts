import {Request, Response} from "express";
import { TimeLike } from "fs";

export type IQuestion = {
  questionContents: string;
  questionHyperlink?: string;
  userId: number;
  answered: boolean;
  inTrash: boolean;
  inCollection: boolean;
  uploadTime: TimeLike;
  id: number;
}