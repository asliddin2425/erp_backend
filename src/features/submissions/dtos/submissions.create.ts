import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsString, MaxLength } from "class-validator";
import { SubmissionStatus } from "src/common/enums/enums";


export class SubmissionCreate {

    @ApiProperty()
    @IsInt()
    studentId: number;

    @ApiProperty()
    @IsInt()
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

    @ApiProperty()
    @IsEnum(SubmissionStatus)
    status: SubmissionStatus;
}