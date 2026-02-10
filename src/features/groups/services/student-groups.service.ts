import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentGroup } from "../entities/student-groups.entity";
import { Repository } from "typeorm";
import { group } from "console";
import { plainToInstance } from "class-transformer";
import { StudentGroupsList } from "../dtos/student-groups.list";

@Injectable()
export class StudentGroupsService {
    constructor(
        @InjectRepository(StudentGroup)
        private readonly repo: Repository<StudentGroup>
    ) {}




    async getAll() {
        const rawStudentGroup = await this.repo.find()
        const studentGroups = plainToInstance(
            StudentGroup,
            rawStudentGroup,
            {
                excludeExtraneousValues: true,
            },
        );
        return studentGroups;
    }


    async GetOne(id: number) {
        const rawStudentGroup = await this.repo.findOneBy({id})
        if(!StudentGroup) {
            throw new Error("Not found")
        }
        return plainToInstance(StudentGroupsList, rawStudentGroup, {
            excludeExtraneousValues: true,
        });
    }
}