import { Person } from "@/App";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  users: Person[];
};

const initialState: InitialState = {
  users: [],
};

export const getData = () => {
  return [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      birthday_date: "1990-05-15",
      phone_number: "123-456-7890",
      address: "123 Main Street",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      birthday_date: "1985-12-10",
      phone_number: "987-654-3210",
      address: "456 Elm Avenue",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      birthday_date: "1988-08-25",
      phone_number: "555-123-4567",
      address: "789 Oak Road",
    },
    {
      id: 4,
      name: "Eva Brown",
      email: "eva@example.com",
      birthday_date: "1995-03-30",
      phone_number: "111-222-3333",
      address: "567 Pine Lane",
    },
    {
      id: 5,
      name: "Mike Wilson",
      email: "mike@example.com",
      birthday_date: "1983-06-20",
      phone_number: "999-888-7777",
      address: "321 Cedar Street",
    },
  ];
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
        state.users = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {getUsers} = counterSlice.actions;

export default counterSlice.reducer;
