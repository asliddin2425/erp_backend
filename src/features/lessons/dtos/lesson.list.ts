import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

export class LessonList {

    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    groupId: number;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    @Type(() => Date)
    startDate: Date;
}