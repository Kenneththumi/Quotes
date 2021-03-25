export class Quote {

    upvote:number;
    downvote:number;
    moreDetails:boolean;
    //
    constructor(public quote:string, public author:string, public user:string, public dateSubmission:Date){
        this.upvote = 0;
        this.downvote = 0;
        this.moreDetails=false;
    }
}
