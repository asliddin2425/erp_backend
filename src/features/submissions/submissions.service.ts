import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Submission } from "./entities/submissions.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { SubmissionsList } from "./dtos/submissions.list";
import { SubmissionCreate } from "./dtos/submissions.create";

@Injectable()
export class SubmissionService {
    constructor(
        @InjectRepository(Submission)
        private readonly repo: Repository<Submission>
    ) { }


    async getAll() {
        const rawSubmission = await this.repo.find()
        const submissions = plainToInstance(
            SubmissionsList,
            rawSubmission,
            {
                excludeExtraneousValues: true,
            },
        );
        return submissions;
    }


    async getOne(id: number) {
        const rawSubmission = await this.repo.findOneBy({ id })
        if (!rawSubmission) {
            throw new Error("Not found")
        }
        return plainToInstance(SubmissionsList, rawSubmission, {
            excludeExtraneousValues: true,
        })
    }


    async create(payload: SubmissionCreate) {
        const newSubmission = this.repo.create(payload as Submission)
        await this.repo.save(newSubmission)
        return plainToInstance(SubmissionsList, newSubmission, {
            excludeExtraneousValues: true,
        })
    }
}