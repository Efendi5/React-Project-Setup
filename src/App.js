import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Form } from "./components/form/Form";
import { Label } from "./components/label/Label";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { Textarea } from "./components/textarea/Textarea";
import { Section } from "./components/section/Section";
import { Entry } from "./components/entry/Entry";
import { TabBar } from "./components/tabBar/Tabbar";

function App() {
  return (
    <>
      <Header>Journal</Header>
      <main>
        <Label> New Entry</Label>
        <Form>
          <Input text="Motto"></Input>
          <Textarea text="Notes"></Textarea>
          <Button>Create</Button>
        </Form>
        <Section>
          <TabBar firstTab="All Entries" secondTab="Favorites"></TabBar>
          <Entry
            date="Feb 27, 2028"
            title="That'life in the city"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          ></Entry>
          <Entry
            date="Feb 26, 2028"
            title="That'life in the city"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          ></Entry>
          <Entry
            date="Feb 25, 2028"
            title="That'life in the city"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          ></Entry>
        </Section>
      </main>
      <Footer>Journal App - 2028</Footer>
    </>
  );
}

export default App;
