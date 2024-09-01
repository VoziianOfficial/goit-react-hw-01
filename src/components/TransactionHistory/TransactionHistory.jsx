import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.tableTh}>Type</th>
            <th className={s.tableTh}>Amount</th>
            <th className={s.tableTh}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }, index) => (
            <tr className={index % 2 === 0 ? s.even : s.odd} key={id}>
              <td className={s.tableTd}>{type}</td>
              <td className={s.tableTd}>{amount}</td>
              <td className={s.tableTd}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory;
