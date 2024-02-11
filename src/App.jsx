import { useState } from 'react';
import Authenticate from "./Authenitcate";
import SignUpForm from "./SignUpForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      {token ? (
        <Authenticate token={token} />
      ) : (
        <SignUpForm setToken={setToken} />
      )}
    </>
  );
}

export default App;
