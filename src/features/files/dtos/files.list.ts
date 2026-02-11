import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";

export class FilesList {

    @Expose()
    @ApiProperty()
    id: number;

    
    @Expose()
    @ApiProperty()
    @Type(() => Number)
    lessonId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    studentId: number;

    @Expose()
    @ApiProperty()
    @Type(() => Number)
    submissionId: number;

    @Expose()
    @ApiProperty()
    path: string;

    @Expose()
    @ApiProperty()
    size: number;
}