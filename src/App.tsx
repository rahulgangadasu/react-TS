import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { is } from "zod/locales";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    //return () => controller.abort();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
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
*/
