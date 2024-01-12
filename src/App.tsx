import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./hooks/useUser";
import Routes from "./routes";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Routes />
    </UserProvider>
  );
}

export default App;
