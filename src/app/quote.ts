export class Quote {

    vote:number;
    moreDetails:boolean;
    //
    constructor(public quote:string, public author:string, public user:string, dateSubmission:Date){
        this.vote = 0;
        this.moreDetails=false;
    }
}
