import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class FilesCreate {
    @ApiProperty()
    @IsInt()
    lessonId: number;

    @ApiProperty()
    @IsInt()
    studentId: number;

    @ApiProperty()
    @IsInt()
    submissionId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    path: string;

    @ApiProperty()
    @IsInt()
    size: number;


}