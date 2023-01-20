import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ViewRecord() {
  const [record, setRecord] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch("/api/v1/records/" + params.id)
      .then((response) => response.json())
      .then(setRecord);
  }, [params.id]);

  return (
    <div>
      <div>
        <b>Name</b>
      </div>
      <div>{record.name}</div>

      <div>
        <b>Text</b>
      </div>
      <div>{record.text}</div>
    </div>
  );
}
