import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, IsOptional } from "class-validator";

export class StudentGroupsUpdate {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    studentId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    groupId: number;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    joinedDate: Date;
    
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}