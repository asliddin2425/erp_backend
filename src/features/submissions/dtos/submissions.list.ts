import { Expose, Type } from "class-transformer";
import { SubmissionStatus } from "src/common/enums/enums";

export class SubmissionsList {
    @Expose()
    id: number;

    @Expose()
    @Type(() => Object)
    studentId: number;

    @Expose()
    @Type(() => Object)
    taskId: number;

    @Expose()
    content: string;

    @Expose()
    mark: number;
    
    @Expose()
    feedback: string;

    @Expose()
    status: SubmissionStatus;
}