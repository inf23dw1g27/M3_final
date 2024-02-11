import {Entity, model, property} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  UserID?: number;

  @property({
    type: 'string',
    required: true,
  })
  UserName: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
