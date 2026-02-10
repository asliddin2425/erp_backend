import { IsInt, IsOptional } from "class-validator";

export class TaskUpdate {

    @IsInt()
    @IsOptional()
    lessonId: number;

    @IsInt()
    @IsOptional()
    templateId: number;

    @IsInt()
    @IsOptional()
    order: number;
}