import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Submission } from "./entities/submissions.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { SubmissionsList } from "./dtos/submissions.list";
import { SubmissionCreate } from "./dtos/submissions.create";
import { SubmissionsUpdate } from "./dtos/submissions.update";

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

    async update(id: number, payload: SubmissionsUpdate) {
        const submissions = await this.repo.findOneBy({id}) 
        if(!submissions) {
            throw new Error("Not found")
        }
        Object.assign(
            submissions,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) =>value  !== null && value !==undefined,
                ),
            ),
        );
        await this.repo.save(submissions)
        return submissions;
    }


    async delete(id: number) {
        const submissions = await this.repo.findOneBy({id})
        if(!submissions) {
            throw new Error("Not found")
        }
        return await this.repo.remove(submissions)
    }

}