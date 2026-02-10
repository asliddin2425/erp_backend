import { Expose, Type } from "class-transformer";
import { GroupStatus } from "src/common/enums/enums";

export class GroupsList {

    @Expose()
    id: number;

    @Expose()
    @Type(() => Object)
    teacherId: number;

    @Expose()
    title: string;

    @Expose()
    startDate: Date;

    @Expose()
    status: GroupStatus;
}