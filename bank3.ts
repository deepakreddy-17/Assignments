class Bank{
    bankName:string
    bankId:number
    accountNum:number
    constructor(name:string, ID:number,actName:number){
        this.bankName = name;
        this.bankId = ID;
        this.accountNum = actName;
    }
    getSavingDeposit(){
        return `this account:${this.accountNum} gets 5% intrest`
    }
    getFixedDeposit(){
        return `this account:${this.accountNum} gets 6% intrest`
    }
    getReccuringDeposit(){
        return `this account:${this.accountNum} gets 7% intrest`
    }
   
}
let bank1 = new Bank('andhra',1234,567891) 
let bank2 = new Bank('sbi',2345,789856)
let bank3 = new Bank('icici',3421,145625)


console.log(bank1.getSavingDeposit())
console.log(bank2.getFixedDeposit())
console.log(bank3.getReccuringDeposit())



console.log(bank1.bankName,bank1.bankId,bank1.accountNum)
console.log(bank2.bankName,bank2.bankId,bank2.accountNum)
console.log(bank3.bankName,bank3.bankId,bank3.accountNum)