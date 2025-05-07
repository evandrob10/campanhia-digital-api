import { ApiProperty } from '@nestjs/swagger';

export class CreateResidenceDto {
    @ApiProperty()
    complement: string;
    @ApiProperty()
    address_id: number;
}
