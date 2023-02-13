import React from "react";
import { consoleLog } from "./redux/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Logo from "./icons/Logo";
import Home from "./icons/Home";
import Search from "./icons/Search";
import Explore from "./icons/Explore";
import Message from "./icons/Message";
import Likes from "./icons/Likes";
import Create from "./icons/Create";
import WrittenLogo from "./icons/WrittenLogo";

function App() {
  let name = useAppSelector((state) => state.user.name);
  console.log(name);
  //tested again with new develop branch!!
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Logo />
      <Home />
      <Search />
      <Explore />
      <Message />
      <Likes />
      <Create />
      <WrittenLogo />

      <button onClick={() => dispatch(consoleLog({ name: "jim" }))}>
        updated for the develop branch
      </button>
    </div>
  );
}

export default App;
