import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import type { Relation } from "typeorm";

import { SubmissionStatus } from "../../../common/enums/enums";
import { User } from "../../../auth/entities/user.entity";
import { Task } from "../../tasks/entities/task.entity.js";
import { File } from "../../files/entities/files.entity.js";
import { BaseModel } from "../../../core/base-model.js";

@Entity("submissions")
export class Submission extends BaseModel {
  @PrimaryColumn({ type: "int" })
  studentId!: number;

  @PrimaryColumn({ type: "int" })
  taskId!: number;

  @Column({ nullable: true, type: "text" })
  content?: string;

  @Column({ nullable: true, type: "int" })
  mark?: number;

  @Column({ nullable: true, type: "text" })
  feedback?: string;

  @Column({
    type: "enum",
    enum: SubmissionStatus,
  })
  status!: SubmissionStatus;

  @ManyToOne(() => User, (u) => u.submissions)
  @JoinColumn({ name: "studentId" })
  student!: Relation<User>;

  @ManyToOne(() => Task, (t) => t.submissions)
  @JoinColumn({ name: "taskId" })
  task!: Relation<Task>;

  @OneToMany(() => File, (f) => f.submission)
  files!: Relation<File[]>;
}
