import { useState } from "react";

interface Props {
  onAddItem: (a: any) => {};
}

export default function ExpenseForm({ onAddItem }: any) {
  const [newItem, setNewItem] = useState({
    id: 0,
    description: "",
    amount: "",
    category: "",
  });

  const [validation, setValidation] = useState({
    description: true,
    amount: true,
    category: true,
  });

  function handleValidation() {
    if (newItem.description.length < 3) {
      setValidation((v) => {
        return { ...v, description: false };
      });
    } else
      setValidation((v) => {
        return { ...validation, description: true };
      });

    if (newItem.amount === "") {
      setValidation((v) => {
        return { ...v, amount: false };
      });
    } else
      setValidation((v) => {
        return { ...validation, amount: true };
      });

    if (newItem.category === "") {
      setValidation((v) => {
        return { ...v, category: false };
      });
    } else
      setValidation((v) => {
        return { ...v, category: true };
      });
  }

  function checkValidation() {
    if (
      newItem.description.length > 3 &&
      newItem.amount !== "" &&
      newItem.category !== ""
    )
      return true;
    return false;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-gorup mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            value={newItem.description}
            onChange={(e) => {
              setNewItem({
                ...newItem,
                description: e.target.value,
              });
            }}
            type="text"
            className="form-control"
            id="description"
          ></input>
          {!validation.description && (
            <p className="text-danger">
              Description should be at least 3 characters.
            </p>
          )}
        </div>
        <div className="form-gorup mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            value={newItem.amount}
            onChange={(e) => {
              setNewItem({
                ...newItem,
                amount: e.target.value,
              });
            }}
            type="number"
            className="form-control"
            id="amount"
          ></input>
          {!validation.amount && (
            <p className="text-danger">Amount is required.</p>
          )}
        </div>
        <div className="form-gorup mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            onChange={(e) => {
              setNewItem({
                ...newItem,
                category: e.target.value,
              });
            }}
          >
            <option defaultValue=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {!validation.category && (
            <p className="text-danger">Category is required.</p>
          )}
        </div>
        <div>
          <button
            className="btn btn-primary mb-5"
            onClick={() => {
              handleValidation();
              if (checkValidation()) {
                onAddItem(newItem);
                setNewItem({
                  id: 0,
                  description: "",
                  amount: "",
                  category: "",
                });
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
