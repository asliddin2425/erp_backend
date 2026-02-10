import { IsOptional, IsString, MaxLength } from "class-validator";

export class TaskCategoryUpdate {
    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;
}