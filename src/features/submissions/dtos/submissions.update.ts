import { IsInt, IsOptional, IsString } from "class-validator";

export class SubmissionsUpdate {

    @IsInt()
    @IsOptional()
    studentId: number;

    @IsInt()
    @IsOptional()
    taskId: number;

    @IsString()
    @IsOptional()
    content: string;

    @IsInt()
    @IsOptional()
    mark: number;

    @IsString()
    @IsOptional()
    feedback: string;
}