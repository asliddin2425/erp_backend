import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentGroup } from "../entities/student-groups.entity";
import { Repository } from "typeorm";
import { group } from "console";
import { plainToInstance } from "class-transformer";
import { StudentGroupsList } from "../dtos/student-groups.list";
import { StudentGroupsCreate } from "../dtos/student-groups.create";
import { StudentGroupsUpdate } from "../dtos/student-groups.update";

@Injectable()
export class StudentGroupsService {
    constructor(
        @InjectRepository(StudentGroup)
        private readonly repo: Repository<StudentGroup>
    ) {}




    async getAll() {
        const rawStudentGroup = await this.repo.find()
        const studentGroups = plainToInstance(
            StudentGroupsList,
            rawStudentGroup,
            {
                excludeExtraneousValues: true,
            },
        );
        return studentGroups;
    }


    async getOne(id: number) {
        const rawStudentGroup = await this.repo.findOneBy({id})
        if(!rawStudentGroup) {
            throw new Error("NOt found")
        }
        return plainToInstance(StudentGroupsList, rawStudentGroup, {
            excludeExtraneousValues: true,
        });
    }

    async create(payload: StudentGroupsCreate) {
        const newStudentGroup = this.repo.create(payload as StudentGroup);
        await this.repo.save(newStudentGroup)
        return plainToInstance(StudentGroupsCreate, newStudentGroup, {
            excludeExtraneousValues: true,
        })
    }

    async update(id: number, payload: StudentGroupsUpdate) {
        const studentGroups = await this.repo.findOneBy({id})
        if(!studentGroups) {
            throw new Error("Not found")
        }
        Object.assign(
            studentGroups,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) =>value  !== null && value !==undefined,
                ),
            ),
        );
        await this.repo.save(studentGroups)
        return studentGroups;
    }

    async dalete(id: number) {
        const studentGroups = await this.repo.findOneBy({id})
        if(!studentGroups) {
            throw new Error("Not found")
        }
        return await this.repo.remove(studentGroups)
    }
}