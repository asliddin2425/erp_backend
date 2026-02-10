import { IsEnum, IsInt, IsOptional, IsString, MaxLength } from "class-validator";
import { SubmissionStatus } from "src/common/enums/enums";
import { text } from "stream/consumers";

export class SubmissionCreate {

    @IsInt()
    studentId: number;

    @IsInt()
    taskId: number;

    @IsString()
    @IsOptional()
    constent: string;

    @IsInt()
    @IsOptional()
    mark: number;

    @IsString()
    @IsOptional()
    feedback: string;

    @IsEnum(SubmissionStatus)
    status: SubmissionStatus;
}