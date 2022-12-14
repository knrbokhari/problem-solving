// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
const denominations = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
const coinsUnit = {
  'PENNY': 1,
  'NICKEL': 5,
  'DIME': 10,
  'QUARTER': 25,
  'ONE': 100,
  'FIVE': 500,
  'TEN': 1000,
  'TWENTY': 2000,
  'ONE HUNDRED': 10000
};

const moneyFromCid = (amtLeftToPay, cidObj, changeToGive, moneyType) => {
  if (amtLeftToPay >= coinsUnit[moneyType] && cidObj[moneyType]) {
    if (amtLeftToPay >= cidObj[moneyType]) {
      const amtToSubtract = cidObj[moneyType];
      amtLeftToPay -= amtToSubtract;
      changeToGive.push([moneyType, amtToSubtract / 100]);
      cidObj[moneyType] = 0;
    } else {
      const amtToSubtract =
        Math.floor(amtLeftToPay / coinsUnit[moneyType]) * coinsUnit[moneyType];
      amtLeftToPay -= amtToSubtract;
      changeToGive.push([moneyType, amtToSubtract/ 100]);
      cidObj[moneyType] -= amtToSubtract;
    }
  }

  return [amtLeftToPay, cidObj, changeToGive];
};

function checkCashRegister(price, cash, cid) {
  let amtLeftToPay = Math.round((cash - price) * 100);

  let cidObj = cid.reduce((acc, [moneyType, amt]) => {
    return {
      ...acc,
      [moneyType]: Math.round(amt * 100)
    }
  }, {});

  let changeToGive = [];

  denominations.forEach(moneyType => {
    [amtLeftToPay, cidObj, changeToGive] =
      moneyFromCid(amtLeftToPay, cidObj, changeToGive, moneyType);
  });

  if (amtLeftToPay > 0) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }

  const amtLeftInCid = Object.values(cidObj).reduce((acc, amt) => acc + amt, 0);

  if (amtLeftInCid > 0) {
    return {status: 'OPEN', change: changeToGive};
  }

  return {status: "CLOSED", change: cid};
}

  
const test1 = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
const test2 = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
const test3 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
const test4 = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)