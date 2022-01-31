import "./App.css";
import Autocomplete from "./component/autoComplete";
import ClickToEdit from "./component/clickToEdit";
import Modal from "./component/modal";
import Tab from "./component/tab";
import Tag from "./component/tag";
import Toggle from "./component/toggle";

function App() {
  return (
    <>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <Autocomplete />
      <ClickToEdit />
    </>
  );
}

export default App;
