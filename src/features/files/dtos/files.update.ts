import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class FilesUpdate {
    
    @IsInt()
    @IsOptional()
    lessonId: number;

    @IsInt()
    @IsOptional()
    studentId: number;

    @IsInt()
    @IsOptional()
    submissionId: number;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    path: string;

    @IsInt()
    @IsOptional()
    size: number;
}