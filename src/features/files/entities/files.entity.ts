import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import type { Relation } from "typeorm";
import { User } from "../../../auth/user/entities/user.entity";
import { Lesson } from "../../lessons/entities/lesson.entity.js";
import { Submission } from "../../submissions/entities/submissions.entity.js";
import { BaseModel } from "../../../core/base-model.js";

@Entity("files")
export class Files extends BaseModel {
  @PrimaryColumn({ type: "int" })
  lessonId!: number;

  @PrimaryColumn({ type: "int" })
  studentId!: number;

  @PrimaryColumn({ type: "int" })
  submissionId!: number;

  @Column({ length: 128, type: "varchar" })
  path!: string;

  @Column({ type: "int" })
  size!: number;

  @ManyToOne(() => User, (user) => user.files)
  @JoinColumn({ name: "studentId" })
  student!: User;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: "lessonId" })
  lesson!: Relation<Lesson>;

  @ManyToOne(() => Submission, (s) => s.files)
  @JoinColumn({ name: "submissionId" })
  submission!: Relation<Submission>;
}


