import React, { useReducer, useEffect } from 'react';
import userContext from './userContext';
import userReducer from './usersReducer';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, DELETE_USER } from '../types';
import {
  BanknotesIcon,  // banknotes
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";

// Simulación de la carga de datos (fetch con setTimeout)
const fakeFetchUsers = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve([
        {
          id: 1, nombre: 'Juan', apellido: 'Perez', edad: 30,
          color: "gray",
          icon: DevicePhoneMobileIcon,
          title: "Today's Money",
          value: "$53k",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
          },
        },
        {
          id: 2, nombre: 'Ana', apellido: 'Gomez', edad: 25,
          color: "gray",
          icon: UserPlusIcon,
          title: "Today's Money",
          value: "$53k",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
          },
        },
        {
          id: 3, nombre: 'Carlos', apellido: 'Lopez', edad: 40,
          color: "gray",
          icon: UsersIcon,
          title: "Today's Money",
          value: "$53k",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
          },
        },
        {
          id: 4, nombre: 'Carlos 2', apellido: 'Lopez', edad: 40,
          color: "gray",
          icon: ChartBarIcon,
          title: "Today's Money",
          value: "$53k",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
          },
        },
      ]);
    }, 500)
  );

const UserStateProvider = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Action para listar usuarios
  const fetchUsers = async () => {
    dispatch({ type: FETCH_USERS_REQUEST });
    const users = await fakeFetchUsers();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
  };

  // Action para eliminar un usuario
  const deleteUser = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  // useEffect(() => {
  //   fetchUsers(); // Cargar usuarios al iniciar
  // }, []);

  return (
    <userContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        deleteUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserStateProvider;