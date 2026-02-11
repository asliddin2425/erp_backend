import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import type { Relation } from "typeorm";

import { Group } from "../../groups/entities/groups.entity";
import { Task } from "../../tasks/entities/task.entity";
import { Files } from "../../files/entities/files.entity.js";
import { BaseModel } from "../../../core/base-model.js";

@Entity("lessons")
export class Lesson extends BaseModel {
  @Column({ type: "int" })
  groupId!: number;

  @Column({ length: 128, type: "varchar" })
  title!: string;

  @Column({ type: "timestamp" })
  startDate!: Date;

  @OneToMany(() => Task, (t) => t.lesson)
  tasks!: Relation<Task[]>;

  @OneToMany(() => Files, (f) => f.lesson)
  files!: Relation<Files[]>;

  @ManyToOne(() => Group, (g) => g.lessons)
  @JoinColumn({ name: "groupId" })
  group!: Relation<Group[]>;
}
