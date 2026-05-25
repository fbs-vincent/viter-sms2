import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesDeveloper } from "./routes/routesDeveloper";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="*" element=<>page not found.</> />
            {routesDeveloper.map(({ ...routesProps }, key) => {
              return <Route key={key} {...routesProps} />;
            })}
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
