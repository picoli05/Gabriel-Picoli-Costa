import { Student } from '../../../students/entities/student/student.entity';
export declare class Course {
    id: number;
    name: string;
    description: string;
    students: Student[];
}
