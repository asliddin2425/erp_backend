import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { GroupStatus } from "src/common/enums/enums";

export class GroupsCreate {

    @ApiProperty()
    @IsInt()
    teacherId: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @Type(() => Date)
    @IsDate()
    startDate: Date;

    @ApiProperty()
    @IsEnum(GroupStatus)
    status: GroupStatus;
}