class Bank1 {
    id:number
    name:string
    ac:number
    constructor(a:number,b:string,c:number)
    {
        this.id=a
        this.name=b;
        this.ac=c;
    }
    getDisplay(){
        return `Id :${this.id} Name: ${this.name} Account :${this.ac}`
    }
}
let hdfc1=new Bank1(123,'Deepak',79858662481)
console.log(hdfc1.getDisplay())