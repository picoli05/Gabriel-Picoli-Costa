import { CoursesService } from './courses.service';
import { Course } from '../courses/entities/course/course.entity';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    findAll(): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    create(course: Course): Promise<Course>;
    remove(id: number): Promise<void>;
}
