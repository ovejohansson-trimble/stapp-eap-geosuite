import { Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import Overview from "./pages/Overview";
import ReleaseNotes from "./pages/ReleaseNotes";
import Layout from "./components/layout/Layout";
import Download from "./pages/Download";
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
              <Route path="/faq" element={<FAQ />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/releasenotes" element={<ReleaseNotes />} />
              <Route path="/clients" element={<Download />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
