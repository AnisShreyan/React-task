import "./App.css";
import Dashboard from "./Component/Dashboard";
import LoginForm from "./Component/LoginForm";
import { useFirebase } from "./Context/FirebaseContext";

function App() {

  const firebase = useFirebase();

  const user = firebase.user;

  return (
    <div className="container">
      {
        user == null? <LoginForm /> : <Dashboard />
      }      
    </div>
  );
}

export default App;
