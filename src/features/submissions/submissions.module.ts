import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Submission } from "./entities/submissions.entity";
import { SubmissionController } from "./controllers/submissions.controller";
import { SubmssionService } from "./submissions.service";

@Module({
    imports: [TypeOrmModule.forFeature([Submission])],
    controllers: [SubmissionController],
    providers: [SubmssionService]
})
export class SubmissionModule{}