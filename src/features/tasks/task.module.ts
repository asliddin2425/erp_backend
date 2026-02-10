import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { TaskController } from "./controllers/task.controller";
import { TaskService } from "./services/task.service";
import { TaskCategoryController } from "./controllers/taskCategory.controller";
import { TaskCategory } from "./entities/taskCategory.entity";
import { TaskCategoryService } from "./services/taskCategory.service";
import { TaskTemplate } from "./entities/taskTemplates.entity";
import { TaskTemplateController } from "./controllers/taskTemplate.controller";
import { TaskTemplateService } from "./services/taskTemplate.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task, TaskCategory, TaskTemplate])],
    controllers: [TaskController, TaskCategoryController, TaskTemplateController],
    providers: [TaskService, TaskCategoryService, TaskTemplateService]
})
export class TaskModule{}