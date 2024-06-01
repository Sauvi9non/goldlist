export interface Expression {
    "foreign" : string,
"translate" : string,
"isMemorizing" : boolean
}

export interface Page {
    "pageDate": string,
"expressions" : Expression[],
"count": number
}