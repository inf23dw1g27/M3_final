import {Entity, model, property} from '@loopback/repository';

@model()
export class TaskCategories extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  CategoryID?: number;

  @property({
    type: 'string',
    required: true,
  })
  CategoryName: string;


  constructor(data?: Partial<TaskCategories>) {
    super(data);
  }
}

export interface TaskCategoriesRelations {
  // describe navigational properties here
}

export type TaskCategoriesWithRelations = TaskCategories & TaskCategoriesRelations;
