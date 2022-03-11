import Header from "./components/Header";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Form />
      </Provider>
    </div>
  );
}

export default App;
