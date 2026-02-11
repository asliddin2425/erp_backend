import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LessonCreate {

    @ApiProperty()
    @IsInt()
    groupId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsDate()
    startDate: Date;
}