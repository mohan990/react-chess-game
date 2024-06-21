import { Toaster } from 'sonner';
import './App.css';
import GlobalContextProvider from './context/context';
import HomePage from './pages/homePage';
function App() {
  return (
    <GlobalContextProvider>
      <HomePage />
      <Toaster position="top-center" richColors expand={true} />
    </GlobalContextProvider>
  );
}
export default App;
