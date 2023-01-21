import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";

import { INBOX, ARCHIVED } from "./helpers/constants";

const App = () => {
  const [listType, setListType] = useState(INBOX);
  const [listView, setListView] = useState(true);

  return (
    <div className="container">
      <Header
        listType={listType}
        setListType={setListType}
        listView={listView}
      />
      <div className="container-view">
        <Body
          listType={listType}
          listView={listView}
          setListView={setListView}
        />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
