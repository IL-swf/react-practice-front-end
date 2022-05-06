import PropTypes from 'prop-types';
import axios from "axios";
import {useState} from "react";

const TodoCreator = ({handleNewItem}) => {

    const [content, setContent] = useState("");

    const postNewItem = async () => {
        const response = await axios.post("http://localhost:3001/api/items", {content});
        console.log(response.data)
        handleNewItem();
    }

    return (
        <div className={'Todo-Creator'}>
            <input type={'text'} onChange={(event) => {setContent(event.target.value)}}/>
            <button onClick={postNewItem}> Add Item </button>
        </div>
    );
};

TodoCreator.propTypes = {
    handleNewItem: PropTypes.func,
};

export default TodoCreator;