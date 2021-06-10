class Hp{
    custId:any=1234
    custName:any='deepak'
    custAcnumber:any=457411
    //custId=[101,102,103];
    //custName=['hari','ram','vikram'];
    //custAcnumber=[145621,245365,451223];
    getSavingDeposit()
    {
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${5}% savings in his bank`;
    }
     getReccuringDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${6}% savings in his bank`;
    }
     getFixedDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${7}% savings in his bank`;
    }
}
     console.log(3);
    let cust=new Hp();
    console.log(cust.getSavingDeposit());

    function getSavingDeposit(arg0: number[], arg1: number[], arg2: number[]): any {
    throw new Error("Function not implemented.");
     }