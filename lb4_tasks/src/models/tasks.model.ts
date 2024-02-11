import {Entity, model, property} from '@loopback/repository';

@model()
export class Tasks extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  TaskID?: number;

  @property({
    type: 'string',
    required: true,
  })
  Title: string;

  @property({
    type: 'string',
  })
  Description?: string;

  @property({
    type: 'string',
    required: true,
  })
  DueDate: string;

  @property({
    type: 'number',
    required: true,
  })
  userid: number;

  @property({
    type: 'number',
    required: true,
  })
  categoryid: number;

  @property({
    type: 'number',
    required: true,
  })
  statusid: number;


  constructor(data?: Partial<Tasks>) {
    super(data);
  }
}

export interface TasksRelations {
  // describe navigational properties here
}

export type TasksWithRelations = Tasks & TasksRelations;
