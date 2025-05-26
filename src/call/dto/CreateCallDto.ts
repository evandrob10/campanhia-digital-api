export class CreateCallDto {
    id?: number;
    VisitantIP: string;
    callActive: boolean;
    callAnswered: boolean;
    CallDateTime: Date;
    ResidentID: number;
}
