import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt } from "class-validator";

export class StudentGroupsCreate {

    @ApiProperty()
    @IsInt()
    studentId: number;

    @ApiProperty()
    @IsInt()
    groupId: number;

    @ApiProperty()
    @IsDate()
    joinedDate: Date;

    @ApiProperty()
    @IsBoolean()
    isActive: boolean;
}