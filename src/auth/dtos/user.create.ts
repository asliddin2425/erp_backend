import {IsString, IsEnum, IsDate, IsOptional, IsNotEmpty, MaxLength} from 'class-validator'
import { Gender, Role } from 'src/common/enums/enums'


export class UserCreate {
    @IsEnum(Role)
    role: Role

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    login: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    lastName: string

    @IsString()
    @MaxLength(32)
    @IsOptional()
    middleName?: string

    @IsString()
    @IsOptional()
    @MaxLength(128)
    profileImage?: string

    @IsDate()
    birthDate: Date

    @IsEnum(Gender)
    gender: Gender
}