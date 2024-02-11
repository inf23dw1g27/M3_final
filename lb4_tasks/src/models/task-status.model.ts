import {Entity, model, property} from '@loopback/repository';

@model()
export class TaskStatus extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  StatusID?: number;

  @property({
    type: 'string',
    required: true,
  })
  StatusName: string;


  constructor(data?: Partial<TaskStatus>) {
    super(data);
  }
}

export interface TaskStatusRelations {
  // describe navigational properties here
}

export type TaskStatusWithRelations = TaskStatus & TaskStatusRelations;
