import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TaskCategories} from '../models';
import {TaskCategoriesRepository} from '../repositories';

export class TaskCategoriesController {
  constructor(
    @repository(TaskCategoriesRepository)
    public taskCategoriesRepository : TaskCategoriesRepository,
  ) {}

  @post('/task-categories')
  @response(200, {
    description: 'TaskCategories model instance',
    content: {'application/json': {schema: getModelSchemaRef(TaskCategories)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TaskCategories, {
            title: 'NewTaskCategories',
            exclude: ['CategoryID'],
          }),
        },
      },
    })
    taskCategories: Omit<TaskCategories, 'CategoryID'>,
  ): Promise<TaskCategories> {
    return this.taskCategoriesRepository.create(taskCategories);
  }

  @get('/task-categories/count')
  @response(200, {
    description: 'TaskCategories model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TaskCategories) where?: Where<TaskCategories>,
  ): Promise<Count> {
    return this.taskCategoriesRepository.count(where);
  }

  @get('/task-categories')
  @response(200, {
    description: 'Array of TaskCategories model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TaskCategories, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TaskCategories) filter?: Filter<TaskCategories>,
  ): Promise<TaskCategories[]> {
    return this.taskCategoriesRepository.find(filter);
  }

  @patch('/task-categories')
  @response(200, {
    description: 'TaskCategories PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TaskCategories, {partial: true}),
        },
      },
    })
    taskCategories: TaskCategories,
    @param.where(TaskCategories) where?: Where<TaskCategories>,
  ): Promise<Count> {
    return this.taskCategoriesRepository.updateAll(taskCategories, where);
  }

  @get('/task-categories/{id}')
  @response(200, {
    description: 'TaskCategories model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TaskCategories, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TaskCategories, {exclude: 'where'}) filter?: FilterExcludingWhere<TaskCategories>
  ): Promise<TaskCategories> {
    return this.taskCategoriesRepository.findById(id, filter);
  }

  @patch('/task-categories/{id}')
  @response(204, {
    description: 'TaskCategories PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TaskCategories, {partial: true}),
        },
      },
    })
    taskCategories: TaskCategories,
  ): Promise<void> {
    await this.taskCategoriesRepository.updateById(id, taskCategories);
  }

  @put('/task-categories/{id}')
  @response(204, {
    description: 'TaskCategories PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() taskCategories: TaskCategories,
  ): Promise<void> {
    await this.taskCategoriesRepository.replaceById(id, taskCategories);
  }

  @del('/task-categories/{id}')
  @response(204, {
    description: 'TaskCategories DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.taskCategoriesRepository.deleteById(id);
  }
}
