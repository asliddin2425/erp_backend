import { Expose, Type } from "class-transformer";

export class StudentGroupsList {
    @Expose()
    id: number

    @Expose()
    @Type(()=> Object)
    studentId: number;

    @Expose()
    @Type(() => Object)
    groupId: number;

    @Expose()
    joinedDate: Date;

    @Expose()
    isActive: number;
}