import { Repository } from 'typeorm';
import { Student } from './entities/student/student.entity';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    create(student: Student): Promise<Student>;
    remove(id: number): Promise<void>;
}
