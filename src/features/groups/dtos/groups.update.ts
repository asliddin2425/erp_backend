import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsInt, IsOptional, IsString, MaxLength } from "class-validator";
import { GroupStatus } from "src/common/enums/enums";

export class GroupsUpdate {

    @ApiProperty()
    @IsInt()
    @IsOptional()
    teacherId: number

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    startDate: Date;

    @ApiProperty()
    @IsEnum(GroupStatus)
    status: GroupStatus;
}