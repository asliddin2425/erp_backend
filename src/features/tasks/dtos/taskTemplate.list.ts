import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

export class TaskTemplateList {

    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    categoryId: number;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    description: string;

    @Expose()
    @ApiProperty()
    content: string;
}