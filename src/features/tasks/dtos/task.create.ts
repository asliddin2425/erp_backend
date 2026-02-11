import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class TaskCreate {

    @ApiProperty()
    @IsInt()
    lessonId: number;

    @ApiProperty()
    @IsInt()
    templateId: number;

    @ApiProperty()
    @IsInt()
    order: number;
}