import { Expose, Type } from "class-transformer";

export class TaskTemplateList {

    @Expose()
    id: number;

    @Expose()
    @Type(() => Object)
    categoryId: number;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    content: string;
}