import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  );
}

export default App;
