import type { User } from "./services/user-service";
import userService from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => () => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 27, name: "Rahul" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
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
    userService.update(updatedUser).catch((error) => {
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
