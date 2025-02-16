// Initial data

let price = 2000;
let interestRate = 2 / 100; // 2%
let months = 10;
let principal = price / months;
let monthly_interest = principal * interestRate;
let totalInterest = 0;
let remainingBalance = price;

// const totalPrincipal = 2000;
// const duration = 10;
// const interestRate = 2 / 100;

// let principalPayment; // Dynamic principal payment per 3rd month
// if (totalPrincipal % (duration / 3) === 0) {
//   principalPayment = totalPrincipal / (duration / 3); // Split evenly
// } else {
//   principalPayment = 600; // Default value if not evenly split
// }

// let totalInterest = 0;
// let totalPrincipalPaid = 0;
// let totalAmountPaid = 0;

// for (let month = 1; month <= duration; month++) {
//   let interestPaid = (totalPrincipal - totalPrincipalPaid) * interestRate; // Interest on remaining principal
//   let principalPaid = 0;

//   // Pay principal dynamically every 3rd month or in the last month
//   if (month % 3 === 0 || month === duration) {
//     if (totalPrincipalPaid + principalPayment < totalPrincipal) {
//       principalPaid = principalPayment; // Pay the dynamic amount every 3rd month
//     } else {
//       principalPaid = totalPrincipal - totalPrincipalPaid; // Pay the remaining principal in last month
//     }
//   }

//   totalPrincipalPaid += principalPaid;
//   let totalPaid = principalPaid + interestPaid;
//   totalInterest += interestPaid;
//   totalAmountPaid += totalPaid;

//   console.log(
//     `Month ${month}: Principal = ${principalPaid}, Interest = ${interestPaid.toFixed(
//       2
//     )}, Total = ${totalPaid.toFixed(2)}`
//   );

//   if (totalPrincipalPaid >= totalPrincipal) {
//     console.log("Loan fully paid off.");
//     break; // Stop early if loan is paid off
//   }
// }

// console.log(`Total Interest Paid: ${totalInterest.toFixed(2)}`);
// console.log(`Total Amount Paid: ${totalAmountPaid.toFixed(2)}`);

// let n = 10;
// let price1 = 2000;
// let interest1 = 2;
// for (i = 1; i <= n; i++) {
//   console.log(`${i}
//     `);
// }
