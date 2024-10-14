import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>, // Repositório injetado
  ) {}

  // Método para buscar todos os estudantes
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // Método para buscar um estudante por ID
  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  // Método para criar um novo estudante
  create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  // Método para remover um estudante por ID
  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}