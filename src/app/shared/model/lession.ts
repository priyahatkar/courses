export interface IlessonsRes{
    payload: Ilession[]
}


export interface Ilession {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}