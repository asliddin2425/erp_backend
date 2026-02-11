import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { SubmissionStatus } from "src/common/enums/enums";

export class SubmissionsList {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    studentId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    taskId: number;

    @Expose()
    @ApiProperty()
    content: string;

    @Expose()
    @ApiProperty()
    mark: number;
    
    @Expose()
    @ApiProperty()
    feedback: string;

    @Expose()
    @ApiProperty()
    status: SubmissionStatus;
}