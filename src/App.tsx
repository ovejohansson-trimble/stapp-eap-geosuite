import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Layout from "./components/layout/Layout";
import SgfLayout from "./sgf/components/SgfLayout";

function App() {
  return (
    <Routes>
      <Route path="/testsgf" element={<SgfLayout />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Overview />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
