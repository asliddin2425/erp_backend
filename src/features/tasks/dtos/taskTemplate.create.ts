import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class TaskTemplateCreate {
    @IsInt()
    categoryId: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @IsString()
    @IsOptional()
    @MaxLength(1024)
    description: string;
    
    @IsString()
    @IsNotEmpty()
    content: string
}
