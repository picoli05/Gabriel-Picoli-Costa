import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../courses/entities/course/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find({ relations: ['students'] });
  }

  findOne(id: number): Promise<Course> {
    return this.coursesRepository.findOne({ where: { id }, relations: ['students'] });
  }

  create(course: Course): Promise<Course> {
    return this.coursesRepository.save(course);
  }

  async remove(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}
