import { IsDate, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LessonCreate {

    @IsInt()
    groupId: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: number;

    @IsDate()
    startDate: Date;
}