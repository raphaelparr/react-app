import { FieldValues, useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface Props {
  submit: (childData: object) => void;
}

export default function ProjectForm({ submit }: Props) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("clicked");
    submit(change);
  };

  const [change, setChange] = useState({
    description: "",
    amount: "",
    category: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          onChange={(event) =>
            setChange({ ...change, description: event.target.value })
          }
          value={change.description}
          id="description"
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          onChange={(event) => {
            setChange({ ...change, amount: event.target.value });
          }}
          value={change.amount}
          id="amount"
          type="number"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          onChange={(event) => {
            setChange({ ...change, category: event.target.value });
          }}
          value={change.category}
          id="category"
          className="form-control"
        >
          <option value="empty"></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
