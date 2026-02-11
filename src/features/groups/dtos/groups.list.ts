import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { GroupStatus } from "src/common/enums/enums";

export class GroupsList {

    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    @Type(() => Object)
    teacherId: number;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    startDate: Date;

    @Expose()
    @ApiProperty()
    status: GroupStatus;
}