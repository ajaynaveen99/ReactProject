import Accordion from "./components/Accordion";

const data = [
  {
    title: "Accordion Item #1",
    content: "This is the first item's accordion body."
  },
  {
    title: "Accordion Item #2",
    content: "This is the second item's accordion body."
  },
  {
    title: "Accordion Item #3",
    content: "This is the third item's accordion body."
  }
];

function App() {
  return <Accordion items={data} />;
}

export default App;
