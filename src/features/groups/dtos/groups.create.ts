import { IsDate, IsEnum, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { GroupStatus } from "src/common/enums/enums";

export class GroupsCreate {

    @IsInt()
    teacherId: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @IsDate()
    startDate: Date;

    @IsEnum(GroupStatus)
    status: GroupStatus;
}