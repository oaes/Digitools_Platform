import "./App.css";
import Mango from "./assets/Todo";

function App() {
  return (
    <>
      <h2>Exploring React Core Concepts</h2>
      <Mango task="working on project" isDone={true}></Mango>
      {/* <Mango task="working project" isDone="false"></Mango> */}
      {/* <Mango task="working project" isDone="false"></Mango> */}
      {/* <Mango task="learning react"></Mango> */}
      {/* <Name name="john" dev="javaScript"></Name>
      <Name name="milton" dev="Python"></Name>
      <Name name="hitler" dev="Ruby on Rails"></Name> */}
    </>
  );
}

function Name(props) {
  return (
    <div
      style={{
        border: "2px solid green",
        marginBottom: "15px",
        borderRadius: "5px",
      }}
    >
      <h3>Developer:{props.name}</h3>
      <p>Technology:{props.dev}</p>
    </div>
  );
}

export default App;
