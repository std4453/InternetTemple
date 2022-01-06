import Page4 from "components/Page4";
import Background from "components/Background";
import "./index.css";
import Page1 from "components/Page1";
import Page56 from "components/Page56";
import Page89 from "components/Page89";
import Page2 from "components/Page2";
import Wrapper from "components/Wrapper";
import Page10to13 from "components/Page10to13";
import Page7 from "components/Page7";
import Page14 from "components/Page14";
import Page15 from "components/Page15";

export default function App() {
  return (
    <Wrapper numPages={15}>
      <Background />
      <Page1 />
      <Page2 />
      <Page4 />
      <Page56 />
      <Page7 />
      <Page89 />
      <Page10to13 />
      <Page14 />
      <Page15 />
    </Wrapper>
  );
}
