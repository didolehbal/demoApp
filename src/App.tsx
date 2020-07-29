import React from "react";
import Pages from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux"
function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
