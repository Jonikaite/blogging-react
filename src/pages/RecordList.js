import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

export function RecordListPage() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    fetch("/api/v1/records")
      .then((response) => response.json())
      .then((jsonResponse) => setRecords(jsonResponse));
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // const removeAnimal = (id) => {
  //     fetch('/api/v1/animals/' + id, {
  //         method: 'DELETE',
  //         headers: JSON_HEADERS
  //     }).then(fetchAnimals);
  // }

  return (
    <div>
      <h2>Records</h2>

      <table>
        <thead>
          <tr>Antraštė</tr>
          <tr>Publikuota:</tr>
          <tr>Tekstas</tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <tr>{record.name}</tr>
              <tr>{record.text}</tr>
              <tr><Link to={"/records/view/" + record.id}>{record.id}</Link></tr>           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
