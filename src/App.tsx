import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

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

  const deleteUser = (user: User) => () => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUser);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 27, name: "Rahul" };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUSer }) => setUsers([savedUSer, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser,
      )
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
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
