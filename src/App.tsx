import LandingPage from './LandingPage'
import { StoreProvider } from './Store/Store';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <LandingPage />
      </div>
    </StoreProvider>

  );
}

export default App;