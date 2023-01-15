import React from "react";
import Navbar from "./Components/Navbar";
import UserTable from "./Components/UserTable";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "react-bootstrap";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5,
    },
  },
});

function App() {
  return (
    <>
      <Container>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <UserTable />
        </QueryClientProvider>
      </Container>
    </>
  );
}

export default App;
