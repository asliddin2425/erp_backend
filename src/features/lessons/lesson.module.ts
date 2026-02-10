import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./entities/lesson.entity";
import { LessonController } from "./controllers/lesson.controller";
import { LessonService } from "./lesson.service";
import { Module } from "@nestjs/common";
@Module({
    imports: [TypeOrmModule.forFeature([Lesson])],
    controllers: [LessonController],
    providers: [LessonService] 
})
export class LessonModule{}