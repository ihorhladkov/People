import { useEffect } from "react";
import { AuthCard } from "./components/AuthCard";
import { DataTable } from "./components/Table";
import { getData, getUsers, useAppDispatch } from "./redux/store";

export interface Person {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

function App() {
  const dispatch = useAppDispatch();
  // const { value } = useAppSelector(state => state.counter)
  // const dispatch = useAppDispatch()

  // const [isLoading, setIsloading] = useState(false);
  // const [offset, setOffset] = useState(10);
  useEffect(() => {
    try {
      // const get = async () => {
      //   const resp = await fetch(
      //     `http://146.190.118.121/api/table/?limit=50`
      //   );
      //   const data = await resp.json();

      //   console.log(data);
      //   setState(data.results);
      // };

      // get();

      dispatch(getUsers(getData()));
    } catch {
      console.log(Error);
    }
  }, []);
  // if (!state.length) return
  return (
    <>
      {/* <Tablet people={state} setOffset={setOffset} /> */}
      <AuthCard />
      <DataTable />
      {/* <button onClick={() => dispatch(increment())}>Button</button>
      <button onClick={() => dispatch(decrement())}>Button</button> */}
    </>
  );
}

export default App;

// interface Props {
//   people: Person[];
//   setOffset: (prev: (prev: number) => number) => void;
// }

// const Tablet: React.FC<Props> = ({ people, setOffset }) => {
//   return (
//     <>
//       <table
//         data-cy="peopleTable"
//         className="table is-striped is-hoverable is-narrow is-fullwidth"
//       >
//         <thead>
//           <tr>
//             <th>
//               <span className="is-flex is-flex-wrap-nowrap">Name</span>
//             </th>
//             <th>
//               <span className="is-flex is-flex-wrap-nowrap">Born</span>
//             </th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Address</th>
//           </tr>
//         </thead>

//         <tbody>
//           {people.map((person) => (
//             <tr data-cy="person">
//               {person.name}
//               <td>{person.birthday_date}</td>
//               <td>{person.email}</td>
//               <td>{person.phone_number}</td>
//               <td>{person.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => setOffset((prev) => prev - 10)}>Prev</button>
//       <button onClick={() => setOffset((prev) => prev + 10)}>Next</button>
//     </>
//   );
// };
