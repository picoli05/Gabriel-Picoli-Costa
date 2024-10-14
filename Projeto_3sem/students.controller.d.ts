import { StudentsService } from './students.service';
import { Student } from './entities/student/student.entity';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findAll(): Promise<Student[]>;
    findOne(id: string): Promise<Student>;
    create(student: Student): Promise<Student>;
    remove(id: string): Promise<void>;
}
