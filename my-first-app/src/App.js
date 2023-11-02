import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Title from "./components/Title";
import "./myStyle.css";
import { IoIosSend } from "react-icons/io";
function App() {
  const h1Style = { color: "red", fontSize: "100px", marginBottom: "7rem" };

  const log = () => {
    console.log("Add");
  };
  const sendMess = () => {
    window.alert("Message was send");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Title classes={"my-title"} text="Components" />

        <Card
          cardHeader={"JavaScript Course"}
          cardText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veron ostrum"
          }
          background="#333"
        >
          <Button
            classes={"btn-primary btn-ms"}
            text="Send"
            icon={<IoIosSend size={30} color="red" />}
            handleEvent={sendMess}
          />
          <Button classes={"btn-main btn-block"} text="Add" handleEvent={log} />
        </Card>

        <a
          className="App-link"
          href="https://norbertbm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Menyhart Media
        </a>
        <button>Start</button>
      </header>
    </div>
  );
}

export default App;
