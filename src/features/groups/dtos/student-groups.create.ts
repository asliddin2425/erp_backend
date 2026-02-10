import { IsBoolean, IsDate, IsInt } from "class-validator";

export class StudentGroupsCreate {

    @IsInt()
    studentId: number;

    @IsInt()
    groupId: number;

    @IsDate()
    joinedDate: Date;

    @IsBoolean()
    isActive: boolean;
}