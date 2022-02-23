/* eslint-disable @typescript-eslint/indent */
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public username: string;

  @Column()
  public status: boolean;

  @CreateDateColumn()
  public created_at: Date;
}
