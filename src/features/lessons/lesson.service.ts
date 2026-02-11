import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "./entities/lesson.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { LessonList } from "./dtos/lesson.list";
import { LessonCreate } from "./dtos/lesson.create";

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly repo: Repository<Lesson>
    ) { }




    async getAll() {
        const rawLesson = await this.repo.find()
        const lessons = plainToInstance(
            LessonList,
            rawLesson,
            {
                excludeExtraneousValues: true,
            },
        );
        return lessons;
    }

    async getOne(id: number) {
        const rawLesson = await this.repo.findOneBy({ id })
        if (!rawLesson) {
            throw new Error("Not found")
        }
        return plainToInstance(LessonList, rawLesson, {
            excludeExtraneousValues: true,
        });
    }

    async create(payload: LessonCreate) {
        const newLesson = this.repo.create(payload as Lesson);
        await this.repo.save(newLesson);
        return plainToInstance(LessonList, newLesson, {
            excludeExtraneousValues: true,
        })
    }
}