import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class TaskTemplateUpdate {

    @IsInt()
    @IsOptional()
    categoryId: number;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    title: string;

    @IsString()
    @IsOptional()
    @MaxLength(1024)
    description: string;

    @IsString()
    @IsOptional()
    content: string;
}