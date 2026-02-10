import { Entity, Column, OneToMany } from "typeorm";
import type { Relation } from "typeorm";
import { TaskTemplate } from "./taskTemplates.entity";
import { BaseModel } from "../../../core/base-model.js";

@Entity("taskCategories")
export class TaskCategory extends BaseModel {

  @Column({ length: 128, unique: true, type: "varchar" })
  title: string;

  @OneToMany(() => TaskTemplate, (t) => t.category)
  templates!: Relation<TaskTemplate[]>;
}
