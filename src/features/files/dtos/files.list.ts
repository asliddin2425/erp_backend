import { Expose, Type } from "class-transformer";

export class FilesList {

    @Expose()
    id: number;

    
    @Expose()
    @Type(() => Object)
    lessonId: number;

    @Expose()
    @Type(() => Object)
    studentId: number;

    @Expose()
    @Type(() => Object)
    submissionId: number;

    @Expose()
    path: string;

    @Expose()
    size: number;
}