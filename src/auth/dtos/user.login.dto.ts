import { IsString, MaxLength, MinLength } from "class-validator";

export class UserLogin {
    @IsString()
    @MaxLength(32)
    @MinLength(4)
    login: string;

    @IsString()
    @MaxLength(128)
    @MinLength(4)
    password: string;
}