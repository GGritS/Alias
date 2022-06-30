
import Root from "./Components/Root";
import { GameContextProvider } from "./Contexts/GameContext/GameContextProvider";

function App() {
  return (
    <>
      <GameContextProvider>
        <Root />
      </GameContextProvider>
    </>
  );
}

export default App;
