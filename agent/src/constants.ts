import * as path from 'path';
import { Response } from 'express';
import { createMessageObject } from './configUtils';
import {AGENT_NAME} from "../config/env";

export const PATH_TO_REPOS = path.join('repos', AGENT_NAME);

export enum MESSAGE {
  NO_ROUT = 'Rout not found.',
  NO_REPOSITORY = "Can't download repository with this url. Maybe we have already got repository with this name or url is not correct",
  REPOSITORY_DELETED = 'repository successfully deleted',
  REPOSITORY_CLONED = 'repository successfully cloned',
  REPOSITORY_ALREADY_EXIST = 'repository already exist',
}

export const RESPONSE = {
  NO_ROUT: (res: Response) => () =>
    res.status(404).json(createMessageObject(MESSAGE.NO_ROUT)),
  NO_REPOSITORY: (res: Response) => () =>
    res.status(500).json(createMessageObject(MESSAGE.NO_REPOSITORY)),
};
