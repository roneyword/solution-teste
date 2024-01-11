import { Accordion } from "./components/Accordion";
import { GlobalStyle } from "./styles/global";

const items = [
  { id: 1, title: 'Título 1', content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi <a href="www.google.com">deleniti harum aut ratione</a> voluptas ut, consequuntur eligendi eos labore quis blanditiis iusto voluptate temporibus quod accusamus incidunt sit repellat tenetur!</p>' },
  { id: 2, title: 'Título 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti harum aut ratione voluptas ut, consequuntur eligendi eos labore quis blanditiis iusto voluptate temporibus quod accusamus incidunt sit repellat tenetur!' },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Accordion items={items} />
    </>
  );
}

export default App;
