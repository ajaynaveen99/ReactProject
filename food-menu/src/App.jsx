import "./index.css";
import Menu from "./components/Menu"; // separate component
import menu from "./data"; // menu data


function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">

          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
