import transactions from "./data/transactions-dat.js";

console.log(transactions);

const makeTransactionTableRowMarkup = (transaction) => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

const tableEl = document.querySelector(".js-transaction-table");
const transactionTableRowsMarkup = transactions
  .map(makeTransactionTableRowMarkup)
  .join("");

tableEl.insertAdjacentHTML("beforeend", transactionTableRowsMarkup);

console.log(transactionTableRowsMarkup);
