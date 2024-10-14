import { Repository } from 'typeorm';
import { Course } from '../courses/entities/course/course.entity';
export declare class CoursesService {
    private coursesRepository;
    constructor(coursesRepository: Repository<Course>);
    findAll(): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    create(course: Course): Promise<Course>;
    remove(id: number): Promise<void>;
}
