import Page4 from "components/Page4";
import Background from "components/Background";
import "./index.css";
import Page1 from "components/Page1";
import Page56 from "components/Page56";
import Page89 from "components/Page89";

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <Background />
      <Page1 />
      <Page4 />
      <Page56 />
      <Page89 />
    </div>
  );
}
