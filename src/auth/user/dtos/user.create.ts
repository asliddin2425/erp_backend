import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {IsString, IsEnum, IsDate, IsOptional, IsNotEmpty, MaxLength} from 'class-validator'
import { Gender, Role } from 'src/common/enums/enums'


export class UserCreate {

    @ApiProperty()
    @IsEnum(Role)
    role: Role

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(32)
    login: string;


    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(128)
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    lastName: string

    @ApiProperty()
    @IsString()
    @MaxLength(32)
    @IsOptional()
    middleName?: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(128)
    profileImage?: string

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    birthDate: Date

    @ApiProperty()
    @IsEnum(Gender)
    gender: Gender
}