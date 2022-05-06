import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import TodoCreator from "./components/TodoCreator";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      handleUpdateItems()
  }, []);

  const handleUpdateItems = async () => {
      const response = await axios.get("http://localhost:3001/api/items")
      setItems(response.data)
  }

  return (
    <div className="App">
      <TodoCreator handleNewItem={handleUpdateItems}/>
      <Items items={items} handleUpdateItems={handleUpdateItems} />
    </div>
  );
}

export default App;
