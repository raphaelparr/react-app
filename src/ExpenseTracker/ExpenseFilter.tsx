import { useState } from "react";

export default function ExpenseFilter({ onChange }: any) {
  return (
    <>
      <div className="mb-4">
        <select className="form-select" onChange={() => onChange(event)}>
          <option value="All categories">All categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </>
  );
}
