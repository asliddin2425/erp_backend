import { IsInt } from "class-validator";

export class TaskCreate {

    @IsInt()
    lessonId: number;

    @IsInt()
    templateId: number;

    @IsInt()
    order: number;
}