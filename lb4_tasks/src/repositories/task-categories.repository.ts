import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {TaskCategories, TaskCategoriesRelations} from '../models';

export class TaskCategoriesRepository extends DefaultCrudRepository<
  TaskCategories,
  typeof TaskCategories.prototype.CategoryID,
  TaskCategoriesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TaskCategories, dataSource);
  }
}
