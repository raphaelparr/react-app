export default function ProjectMaster(data: any) {
  return (
    <div>
      <tr>
        {data.map((a: any) => (
          <td>{a}</td>
        ))}
      </tr>
    </div>
  );
}
