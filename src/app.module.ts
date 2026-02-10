import { Module } from "@nestjs/common";
import { GroupsModule } from "./features/groups/groups.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/typeorm.config";
import { FilesModule } from "./features/files/files.module";
import { LessonModule } from "./features/lessons/lesson.module";
import { SubmissionModule } from "./features/submissions/submissions.module";
import { TaskModule } from "./features/tasks/task.module";

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), 
    GroupsModule, 
    FilesModule, 
    LessonModule, 
    SubmissionModule,
    TaskModule 
  ],
})
export class AppModule {}
