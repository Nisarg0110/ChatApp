import { useState } from "react";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;