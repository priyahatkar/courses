export interface IcourseRes{
    payload: Icourse[]
}


export interface Icourse {
    id:number;
    description:string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category: "BEGINNER" | "ADVANCED";
    lessonsCount:number;
}