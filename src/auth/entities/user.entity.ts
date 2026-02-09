import { Entity, Column, OneToMany } from "typeorm";
import type { Relation } from "typeorm";
import { Gender, Role } from "../../common/enums/enums";
import { Submission } from "../../features/submissions/entities/submissions.entity.js";
import { Group } from "../../features/groups/entities/groups.entity.js";
import { BaseModel } from "../../core/base-model.js";
import { File } from "../../features/files/entities/files.entity.js";

@Entity("users")
export class User extends BaseModel {
  @Column({ type: "enum", enum: Role })
  role!: Role;

  @Column({ length: 32, unique: true, type: "varchar" })
  login!: string;

  @Column({ length: 128, type: "varchar" })
  password!: string;

  @Column({ length: 32, type: "varchar" })
  firstName!: string;

  @Column({ length: 32, type: "varchar" })
  lastName!: string;

  @Column({ length: 32, nullable: true, type: "varchar" })
  middleName?: string;

  @Column({ length: 128, nullable: true, type: "varchar" })
  profileImage?: string;

  @Column({ type: "date" })
  birthDate!: Date;

  @Column({ type: "enum", enum: Gender })
  gender!: Gender;

  @OneToMany(() => Group, (groups) => groups.teacher)
  groups!: Relation<Group[]>;

  @OneToMany(() => Submission, (s) => s.student)
  submissions!: Relation<Submission[]>;

  @OneToMany(() => File, file => file.student)
  files: File[];
}
