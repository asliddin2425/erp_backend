import { IsDate, isDate, IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class LessonUpdate {

    @IsInt()
    @IsOptional()
    groupId: number;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @IsDate()
    @IsOptional()
    startDate: Date;
}