import { Expose, Type } from "class-transformer";

export class LessonList {

    @Expose()
    id: number;

    @Expose()
    groupId: number;

    @Expose()
    title: string;

    @Expose()
    startDate: Date;
}