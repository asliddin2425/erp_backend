import { Expose, Type } from "class-transformer";
import { TopologyType } from "typeorm";

export class TaskList {
    @Expose()
    id: number;

    @Expose()
    @Type(() => Object)
    lessonId: number;

    @Expose()
    @Type(() => Object)
    templateId: number;
    
    @Expose()
    order: number;
}