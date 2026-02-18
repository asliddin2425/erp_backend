import { IsDate, IsEnum, IsOptional, IsString, MaxLength, maxLength } from "class-validator";
import { Gender, Role } from "src/common/enums/enums";

export class UserUpdate {
    @IsEnum(Role)   
    @IsOptional() 
    role: Role

    @IsString()
    @IsOptional()
    @MaxLength(32)
    login: string

    @IsString()
    @IsOptional()
    @MaxLength(128)
    password: string;

    @IsString()
    @IsOptional()
    @MaxLength(32)
    firstName: string;

    @IsString()
    @IsOptional()
    @MaxLength(32)
    lastName: string;

    @IsString()
    @IsOptional()
    @MaxLength(32)
    middleName: string;

    @IsString()
    @IsOptional()
    @MaxLength(128)
    profileImage: string;

    @IsDate()
    @IsOptional()
    birthDate: Date;

    @IsEnum(Gender)
    gender: Gender;
}