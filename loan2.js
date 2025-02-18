const price = 2000;
const duration = 10;
const interestRate = 2 / 100;

let pricePaid = 0;
let totalAmountPaid = 0;
let TotalInteerst = 0;
// for (let month = 1; month <= duration; month++) {
//   let principalPayment = price / duration; // Base principal payment

//   // Increase principal payment by 3 times if it's a 3rd month
//   if (month % 3 === 0) {
//     principalPayment = principalPayment * 3;
//   }
//   // redue prciple to calculate interest
//   let interestPaid = (price - pricePaid) * interestRate;
//   let principalPaid = 0;

//   // Pay principal dynamically every 3rd month or the last month
//   if (month % 3 === 0 || month === duration) {
//     if (pricePaid + principalPayment <= price) {
//       principalPaid = principalPayment; // Pay the calculated principal
//     } else {
//       principalPaid = price - pricePaid; // Pay the remaining principal in last month
//     }
//   }

//   pricePaid += principalPaid;
//   totalAmountPaid += principalPaid + interestPaid;

//   console.log(
//     `Month ${month}: Principal = ${principalPaid}, Interest = ${interestPaid.toFixed(
//       2
//     )}, Total = ${(principalPaid + interestPaid).toFixed(2)}`
//   );
//   TotalInteerst += interestPaid;

//   if (pricePaid >= price) break;
// }

// console.log(`Total Amount Paid: ${totalAmountPaid.toFixed(2)}`);
// console.log(`Total Interest Paid: ${TotalInteerst.toFixed(2)}`);
