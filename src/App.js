import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChargePage, MainPage } from "./pages";
import { Layout } from "./components";
import { useState } from "react";

function App() {
  const [isMinus, setIsMinus] = useState(false);
  const [seconds, setSeconds] = useState(5);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="*"
            element={
              <MainPage
                isMinus={isMinus}
                setIsMinus={setIsMinus}
                seconds={seconds}
                setSeconds={setSeconds}
              />
            }
          />
          <Route
            path="/charge"
            element={
              <ChargePage
                isMinus={isMinus}
                setIsMinus={setIsMinus}
                seconds={seconds}
                setSeconds={setSeconds}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
