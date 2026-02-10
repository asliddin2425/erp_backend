import { IsBoolean, IsDate, IsInt, IsOptional } from "class-validator";

export class StudentGroupsUpdate {

    @IsInt()
    @IsOptional()
    studentId: number;

    @IsInt()
    @IsOptional()
    groupId: number;

    @IsDate()
    @IsOptional()
    joinedDate: Date;
    
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}