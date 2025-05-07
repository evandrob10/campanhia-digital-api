import { ApiProperty } from '@nestjs/swagger';
export class CreateAddressDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    number: string;
    @ApiProperty()
    district: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    state: string;
    @ApiProperty()
    zip_code: string;
}
