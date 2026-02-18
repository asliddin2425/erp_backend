import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsInt } from "class-validator";

export class StudentGroupsCreate {

    @ApiProperty()
    @IsInt()
    studentId: number;

    @ApiProperty()
    @IsInt()
    groupId: number;

    @ApiProperty()
    @Type(() => Date)
    @IsDate()
    joinedDate: Date;

    @ApiProperty()
    @IsBoolean()
    isActive: boolean;
}