import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";


export class TaskList {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    lessonId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    templateId: number;

    @Expose()
    @ApiProperty()
    order: number;
}