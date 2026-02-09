import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import type { Relation } from "typeorm";
import { Lesson } from "../../lessons/entities/lesson.entity";
import { TaskTemplate } from "../entities/taskTemplates.entity";
import { Submission } from "../../submissions/entities/submissions.entity";
import { BaseModel } from "../../../core/base-model.js";

@Entity("task")
export class Task extends BaseModel {
  @Column({ type: "int" })
  lessonId!: number;

  @PrimaryColumn({ type: "int" })
  templateId!: number;

  @Column({ nullable: true, type: "int" })
  order?: number;

  @ManyToOne(() => Lesson, (l) => l.tasks)
  @JoinColumn({ name: "lessonId" })
  lesson!: Relation<Lesson>;

  @ManyToOne(() => TaskTemplate)
  @JoinColumn({ name: "templateId" })
  template!: Relation<TaskTemplate>;

  @OneToMany(() => Submission, (s) => s.task)
  submissions!: Relation<Submission[]>;
}
