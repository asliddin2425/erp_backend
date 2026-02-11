import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

export class StudentGroupsList {
    @Expose()
    @ApiProperty()
    id: number

    @Expose()
    @ApiProperty()
    @Type(()=> Object)
    studentId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    groupId: number;

    @Expose()
    @ApiProperty()
    joinedDate: Date;

    @Expose()
    @ApiProperty()
    isActive: number;
}