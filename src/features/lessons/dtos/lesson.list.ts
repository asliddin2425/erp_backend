import { Expose, Type } from "class-transformer";

export class LessonList {

    @Expose()
    id: number;

    @Expose()
    @Type(() => Object)
    groupId: number;
    
    @Expose()
    title: string;

    @Expose()
    startDate: Date;
}