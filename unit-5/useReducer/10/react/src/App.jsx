import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const formState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: { latitude: "", longitude: "" },
  },
  courses_offered: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ESTABLISHED_YEAR":
      return { ...state, establishment_year: action.payload };
    case "SET_BULIDNG":
      return {
        ...state,
        address: { ...state.address, building: action.payload },
      };
    case "SET_STREET":
      return {
        ...state,
        address: { ...state.address, street: action.payload },
      };
    case "SET_CITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, name: action.payload },
        },
      };
    case "SET_PIN_CODE":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              pinCode: action.payload,
            },
          },
        },
      };
    case "SET_LAND_MARK":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              landmark: action.payload,
            },
          },
        },
      };
    case "SET_STATE":
      return { ...state, address: { ...state.address, state: action.payload } };
    case "SET_LATITUDE":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            latitude: action.payload,
          },
        },
      };
    case "SET_LONGITUDE":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            longitude: action.payload,
          },
        },
      };
    case "COURSES_OFFERED":
      return { ...state, courses_offered: action.payload };
    case "RESET":
      return formState;
    default:
      return "Invalid type";
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter college name :
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter establishment_year :
          <input
            type="number"
            value={state.establishment_year}
            onChange={(e) =>
              dispatch({
                type: "SET_ESTABLISHED_YEAR",
                payload: e.target.value,
              })
            }
            required
          ></input>
        </label>
        <label>
          Enter building :
          <input
            type="text"
            value={state.address.building}
            onChange={(e) =>
              dispatch({ type: "SET_BULIDNG", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter street name :
          <input
            type="text"
            value={state.address.street}
            onChange={(e) =>
              dispatch({ type: "SET_STREET", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter city name :
          <input
            type="text"
            value={state.address.city.name}
            onChange={(e) =>
              dispatch({ type: "SET_CITY", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter pincode :
          <input
            type="number"
            value={state.address.city.locality.pinCode}
            onChange={(e) =>
              dispatch({ type: "SET_PIN_CODE", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter landmark :
          <input
            type="text"
            value={state.address.city.locality.landmark}
            onChange={(e) =>
              dispatch({ type: "SET_LAND_MARK", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter state name :
          <input
            type="text"
            value={state.address.state}
            onChange={(e) =>
              dispatch({ type: "SET_STATE", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter latitude :
          <input
            type="text"
            value={state.address.coordinates.latitude}
            onChange={(e) =>
              dispatch({ type: "SET_LATITUDE", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter longitude :
          <input
            type="text"
            value={state.address.coordinates.longitude}
            onChange={(e) =>
              dispatch({ type: "SET_LONGITUDE", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <label>
          Enter offered course (seprate by ,) :
          <input
            type="text"
            value={state.courses_offered}
            onChange={(e) =>
              dispatch({
                type: "COURSES_OFFERED",
                payload: e.target.value.split(","),
              })
            }
            required
          ></input>
        </label>
        <button type="submit">Submit</button>
        <button onClick={()=> dispatch({type:'RESET'})} type="button">Reset</button>
      </form>
      <pre>{JSON.stringify(state, null, 1)}</pre>
    </>
  );
}

export default App;
