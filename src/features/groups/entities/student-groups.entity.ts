import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { User } from "../../../auth/entities/user.entity.js";
import { Group } from "../../groups/entities/groups.entity.js";
import { BaseModel } from "../../../core/base-model.js";

@Entity("studentGroups")
export class StudentGroup extends BaseModel {
  @PrimaryColumn({ type: "int" })
  studentId!: number;

  @PrimaryColumn({ type: "int" })
  groupId!: number;

  @Column({ type: "date" })
  joinedDate!: Date;

  @Column({ default: true, type: "bool" })
  isActive!: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: "studentId" })
  student!: User;

  @ManyToOne(() => Group)
  @JoinColumn({ name: "groupId" })
  group!: Group;
}
