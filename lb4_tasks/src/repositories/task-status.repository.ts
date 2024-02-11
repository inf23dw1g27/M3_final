import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {TaskStatus, TaskStatusRelations} from '../models';

export class TaskStatusRepository extends DefaultCrudRepository<
  TaskStatus,
  typeof TaskStatus.prototype.StatusID,
  TaskStatusRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TaskStatus, dataSource);
  }
}
