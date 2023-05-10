import { defineCustomElements } from "@trimble-oss/modus-web-components/loader";
import { Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import Overview from "./pages/Overview";
import ReleaseNotes from "./pages/ReleaseNotes";
import Layout from "./components/layout/Layout";

defineCustomElements();

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/releasenotes" element={<ReleaseNotes />} />
      </Routes>
    </Layout>
  );
}

export default App;
