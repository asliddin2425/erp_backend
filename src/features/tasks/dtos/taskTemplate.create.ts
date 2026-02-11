import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class TaskTemplateCreate {
    
    @ApiProperty()
    @IsInt()
    categoryId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(1024)
    description: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string
}
