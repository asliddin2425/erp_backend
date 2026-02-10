import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class FilesCreate {
    @IsInt()
    lessonId: number;

    @IsInt()
    studentId: number;

    @IsInt()
    submissionId: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    path: string;

    @IsInt()
    size: number;


}