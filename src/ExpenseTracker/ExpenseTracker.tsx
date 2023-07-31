// ExpenseTracker Component
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import { data } from "./Data";

interface Props {
  id: number;
  description: string;
  amount: number;
  category: string;
}

let nextId = 3;

export default function ExpenseTracker() {
  const [items, setItems] = useState(data);
  const [itemsDisplayed, setItemsDisplayed] = useState("All categories");

  const handleSubmit = (newItem: Props) => {
    setItems([
      ...items,
      {
        id: nextId++,
        description: newItem.description,
        amount: newItem.amount,
        category: newItem.category,
      },
    ]);
  };

  const handleFilter = (e: any) => {
    setItemsDisplayed(e.target.value);
  };

  const handleDelete = (id: number) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <ExpenseForm onAddItem={handleSubmit}></ExpenseForm>
      <ExpenseFilter onChange={handleFilter}></ExpenseFilter>
      <ExpenseList
        data={items}
        display={itemsDisplayed}
        onDelete={handleDelete}
      ></ExpenseList>
    </div>
  );
}
