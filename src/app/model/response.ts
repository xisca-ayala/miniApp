export class Response {
    constructor(public err: boolean,
                public code: number, 
                public message: string, 
                public data: any){}
}