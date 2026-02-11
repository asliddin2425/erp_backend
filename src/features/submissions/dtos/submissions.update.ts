import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class SubmissionsUpdate {

    @ApiProperty()
    @IsInt()
    @IsOptional()
    studentId: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    taskId: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    content: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    mark: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    feedback: string;
}