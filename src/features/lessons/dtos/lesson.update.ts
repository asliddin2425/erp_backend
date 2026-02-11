import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate, IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class LessonUpdate {

    @ApiProperty()
    @IsInt()
    @IsOptional()
    groupId: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    startDate: Date;
}