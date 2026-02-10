import { Expose } from "class-transformer";

export class TaskCategoryList {
    @Expose()
    id: number; 

    @Expose()
    title: string;
} 