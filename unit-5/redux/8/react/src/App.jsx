import { store } from "./store";
import { decrement, incremnet } from "./action";

function App() {

console.log("Initial State:", store.getState());

store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

store.dispatch(incremnet()); 
store.dispatch(incremnet()); 
store.dispatch(decrement()); 
store.dispatch(incremnet()); 
store.dispatch(incremnet()); 
store.dispatch(decrement()); 

  return (
    <>
    </>
  );
}

export default App;
