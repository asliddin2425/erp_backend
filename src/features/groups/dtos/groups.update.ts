import { IsDate, IsEnum, IsInt, IsOptional, IsString, MaxLength } from "class-validator";
import { GroupStatus } from "src/common/enums/enums";

export class GroupsUpdate {

    @IsInt()
    @IsOptional()
    teacherId: number

    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @IsDate()
    @IsOptional()
    startDate: Date;

    @IsEnum(GroupStatus)
    status: GroupStatus;
}