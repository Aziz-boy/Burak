console.log("Train.ts is running......")












/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida 
qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function getPositive (int_arr:number[]) {
const positive_array = int_arr.filter(isPositive);
 function isPositive(num:number):boolean {
     return num>0
  }

  return positive_array

}

const result = getPositive([1, -4, 2]);
console.log(result);







function getPositive (int_arr:number[]) {
  let positive_arr :number []=[]
 for (let i=0; i < int_arr.length; i++) {
   if (int_arr[i]>0) {
      positive_arr.push(int_arr[i])
   } else continue
 }
 return positive_arr.join("")
}

let result = getPositive([1, -4, 2,]);
console.log(result);

*/


/*

class BankAccount {
  //# private 
  //_ protected
  //  public
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Public method to access and modify the balance
  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than 0.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: ${amount}. Current Balance: ${this.getBalance()}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew: ${amount}. Current Balance: ${this.getBalance()}`);
  }

  // Protected method to get the balance (read-only for external classes)
  getBalance(): number {
    return this.balance;
  }
}

// Usage
const account = new BankAccount(100);
account.deposit(50);  // Deposited: 50. Current Balance: 150
account.withdraw(30); // Withdrew: 30. Current Balance: 120
// account.balance = 1000; // Error: Cannot access private property





let int_arr:(number | string | boolean )[] = [4,2,3,4]
console.log(int_arr)
int_arr.push("Azizbek", true)
console.log(int_arr)









TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.


function getHighestIndex(arr) { 
    const largest = Math.max(...arr);
    return arr.indexOf(largest); 
}  

function getHighestIndex(arr) { 
    let a = arr[0];
    for(let i = 0; i < arr.length; i++) {
       if (arr[i] > a){
      a= arr[i];
      index = i;
    }
}
 return index;
}  

  

const result = getHighestIndex([5, 21, 12, 21 ,8,]);

console.log(result);
*/