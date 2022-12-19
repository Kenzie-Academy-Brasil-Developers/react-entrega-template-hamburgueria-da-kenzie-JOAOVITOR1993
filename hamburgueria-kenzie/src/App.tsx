import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./Routes";

const App = () => {

  return (
    <UserProvider>
      <RoutesMain/>  
    </UserProvider>
  );
};

export default App;
