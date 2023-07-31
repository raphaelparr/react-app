import { useState } from "react";
import ProjectForm from "../ProjectForm/ProjectForm";
import ProjectMaster from "../ProjectMaster/ProjectMaster";

export default function ProjectList() {
  const [data, setData] = useState({});
  const submit = (childData: object) => {
    setData(childData);
  };

  // Object to array
  const arrayChild = Object.values(data);
  console.log(arrayChild);

  return (
    <>
      <div>
        <ProjectForm submit={submit}></ProjectForm>
        <ProjectMaster data={data}></ProjectMaster>
      </div>
      <div></div>
    </>
  );
}
