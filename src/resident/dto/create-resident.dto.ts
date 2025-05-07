export class CreateResidentDto {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    residence_id: number;
    staffs: number | null;
}
