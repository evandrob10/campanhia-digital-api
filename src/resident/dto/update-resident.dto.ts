import { PartialType } from '@nestjs/swagger';
import { CreateResidentDto } from './create-resident.dto';

export class UpdateResidentDto extends PartialType(CreateResidentDto) {}
export class UpdateProfileDto {
    name: string;
    lastName: string;
    email: string;
    phone: string;
}
