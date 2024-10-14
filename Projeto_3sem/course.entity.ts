import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Student } from '../../../students/entities/student/student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}