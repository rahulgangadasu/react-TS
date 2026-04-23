import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    //async and await to work on promises.
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;

/* Working with .then() and .catch() with promises.
//get() returns a promise which holds all the data till the fetch is completed.
//After promise resolved we will get a response object.
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
     .then((response) => setUsers(response.data))
     .catch((error) => console.log(setError(error.message)));
*/
