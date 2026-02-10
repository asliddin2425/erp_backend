import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class taskCategoryCreate {

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;
}