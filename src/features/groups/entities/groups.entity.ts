import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { GroupStatus } from "../../../common/enums/enums.js";
import { User } from "../../../auth/entities/user.entity.js";
import { Lesson } from "../../lessons/entities/lesson.entity.js";
import { BaseModel } from "../../../core/base-model.js";

import type { Relation } from "typeorm";

@Entity("groups")
export class Group extends BaseModel {
  @PrimaryColumn({ type: "int" })
  teacherId!: number;

  @Column({ length: 128, type: "varchar" })
  title!: string;

  @Column({ type: "date" })
  startDate!: Date;

  @Column({ type: "enum", enum: GroupStatus })
  status!: GroupStatus;

  @OneToMany(() => Lesson, (lesson) => lesson.group)
  lessons!: Relation<Lesson[]>;

  @ManyToOne(() => User, (user) => user.groups)
  @JoinColumn({ name: "teacherId" })
  teacher!: Relation<User>;
}
