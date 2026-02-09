import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import type { Relation } from "typeorm";
import { TaskCategory } from "./taskCategory.entity";
import { BaseModel } from "../../../core/base-model.js";

@Entity("taskTemplates")
export class TaskTemplate extends BaseModel {
  @PrimaryColumn({ type: "int" })
  categoryId!: number;

  @Column({ length: 128, type: "varchar" })
  title!: string;

  @Column({ length: 1024, nullable: true, type: "varchar" })
  description?: string;

  @Column({ type: "text" })
  content!: string;

  @ManyToOne(() => TaskCategory, (c) => c.templates)
  @JoinColumn({ name: "categoryId" })
  category!: Relation<TaskCategory>;
}
