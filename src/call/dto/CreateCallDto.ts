export class CreateCallDto {
    id?: number;
    ip: string;
    callActive: boolean;
    callAnswered: boolean;
    CallDateTime: Date;
    ResidentID: number;
}
