import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Submission } from "./entities/submissions.entity";
import { SubmissionController } from "./controllers/submissions.controller";
import { SubmissionService } from "./submissions.service";

@Module({
    imports: [TypeOrmModule.forFeature([Submission])],
    controllers: [SubmissionController],
    providers: [SubmissionService]
})
export class SubmissionModule { }