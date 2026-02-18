import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "./entities/lesson.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { LessonList } from "./dtos/lesson.list";
import { LessonCreate } from "./dtos/lesson.create";
import { LessonUpdate } from "./dtos/lesson.update";

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

    async update(id: number, payload: LessonUpdate) {
        const lessons = await this.repo.findOneBy({ id })
        if (!lessons) {
            throw new Error("Not found")
        }
        Object.assign(
            lessons,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                ),
            ),
        );
        await this.repo.save(lessons)
        return lessons;
    }


    async delete(id: number) {
        const lessons = await this.repo.findOneBy({id})
        if(!lessons) {
            throw new Error("Not found")
        }
        return await this.repo.remove(lessons)
    }
}