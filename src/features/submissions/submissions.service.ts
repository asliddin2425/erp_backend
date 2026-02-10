import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Submission } from "./entities/submissions.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { SubmissionsList } from "./dtos/submissions.list";

@Injectable()
export class SubmssionService {
    constructor(
        @InjectRepository(Submission)
        private readonly repo: Repository<Submission>
    ) {}


    async getAll() {
        const rawSubmission = await this.repo.find()
        const submissions = plainToInstance(
            Submission,
            rawSubmission,
            {
                excludeExtraneousValues: true,
            },
        );
        return submissions;
    }


    async GetOne(id: number) {
        const rawSubmission = await this.repo.findOneBy({id})
        if(!Submission) {
            throw new Error("Not found")
        }
        return plainToInstance(SubmissionsList, rawSubmission, {
            excludeExtraneousValues: true,
        })
    }
}