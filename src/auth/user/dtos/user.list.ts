import { Gender, Role } from "src/common/enums/enums";
import {Expose} from "class-transformer"
export class UserList {
    @Expose()
    id: number;
    
    @Expose()
    role: Role;

    @Expose()
    login: string;

    @Expose()
    password: string;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    middleName?: string;
    
    @Expose()
    profileImg?: string;

    @Expose()
    birthDate: Date;
    
    @Expose()
    gender: Gender;
    
    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}