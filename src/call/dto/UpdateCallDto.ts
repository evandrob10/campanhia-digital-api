import { PartialType } from '@nestjs/swagger';
import { CreateCallDto } from './CreateCallDto';

export class UpdateCallDto extends PartialType(CreateCallDto) {}
