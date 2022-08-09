import React, { useEffect, useState } from "react";
import { useOneid } from "react-oneid";

function App() {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState()
  const { handleAuth, isAuthenticated, currentUser, logOut } = useOneid();

  useEffect(() => {
    if(isAuthenticated()) {
      setLogged(true)
      currentUser().then(data => setUser(data.user))
    }
    else{
      setLogged(false)
    }
  }, [isAuthenticated()])


  if (!logged) {
    return (
      <div>
        <button onClick={() => handleAuth({type: "login", scope: "profile"})}>Authenticate</button>
      </div>
    );
  }

  return (
    <div>
    <h1>Welcome {user && user.email}</h1>

      <div>
        <button onClick={() => logOut()}>Logout</button>
      </div>
    </div>
  );
}

export default App