interface Props {
  data: any;
  onDelete: (id: number) => void;
  display: string;
}

let id = 0;
export default function ExpenseList({ data, onDelete, display }: Props) {
  const getTotal = () => {
    return data
      .filter((item: any) => {
        if (display !== "All categories") return item.category === display;
        return item;
      })
      .reduce((a: any, v: any) => (a = a + v.amount), 0);
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item: any) => {
              if (display !== "All categories")
                return item.category === display;
              return item;
            })
            .map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>${item.amount}.00</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {data.filter((item: any) => {
            if (display !== "All categories") return item.category === display;
            return item;
          }).length !== 0 && (
            <>
              <tr key="total">
                <td>Total</td>
                <td>${getTotal()}.00</td>
                <td></td>
                <td></td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
