import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Student } from './entities/student/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],  // Certifique-se de que o repositório está sendo importado aqui
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}