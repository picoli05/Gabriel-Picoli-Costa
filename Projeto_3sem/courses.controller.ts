import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from '../courses/entities/course/course.entity';



@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() course: Course) {
    return this.coursesService.create(course);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }
}