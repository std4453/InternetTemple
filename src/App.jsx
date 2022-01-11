import Page4 from "components/Page4";
import Background from "components/Background";
import "./index.css";
import Page1 from "components/Page1";
import Page5to6 from "components/Page5to6";
import Page8to9 from "components/Page8to9";
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
      <Page5to6 />
      <Page7 />
      <Page8to9 />
      <Page10to13 />
      <Page14 />
      <Page15 />
    </Wrapper>
  );
}
