import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class FilesUpdate {
    
    @ApiProperty()
    @IsInt()
    @IsOptional()
    lessonId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    studentId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    submissionId: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    path: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    size: number;
}