import '../App.css';
import PropTypes from 'prop-types';
import axios from "axios";
import {useState} from "react";

const Item = ({item, handleUpdateItems}) => {

    const [showEditView, setShowEditView] = useState(false);
    const [updateContent, setUpdateContent] = useState(item.content);

    const patchUpdateItem = async () => {
        const response = await axios.patch(`http://localhost:3001/api/items/${item.id}`,
            {
                'id':item.id,
                'content':updateContent
            })
        setShowEditView(!showEditView)
        console.log( `Patch update response body: ${JSON.stringify(response.data)}` )
        handleUpdateItems();
    }

    const patchCompleteItem = async () => {
        const response = await axios.patch(`http://localhost:3001/api/items/${item.id}`,
            { 'id':item.id,
                'completed':!item.completed
            })
        console.log( `Patch complete response body: ${JSON.stringify(response.data)}` )
        handleUpdateItems();
    }

    const deleteItem = async () => {
        const response = await axios.delete(`http://localhost:3001/api/items/${item.id}`)
        console.log( `Delete response body: ${JSON.stringify(response.data)}` )
        handleUpdateItems();
    }

    const itemView = () => {
        return (
            <>
                { item.completed
                ?
                    <del className={'Todo-Item-Content'}> {item.content} </del>
                :
                    <>{
                        showEditView
                        ?
                            <input className={'Todo-Item-Content'} type={'text'} defaultValue={updateContent}
                                   onChange={(event) => {setUpdateContent(event.target.value)}}
                            />
                        :
                            <span className={'Todo-Item-Content'}> {item.content} </span>
                    }</>
                }
            </>
        )
    }

    return (
        <li className={'Todo-Item'}>
            <span>
                <input type={'checkbox'} checked={item.completed} onChange={patchCompleteItem}/>
                {itemView()}
                <button className={'Todo-Item-Button'} type={'button'} onClick={deleteItem}> Delete </button>
                { showEditView ?
                    <button className={'Todo-Item-Button'} type={'button'} onClick={patchUpdateItem}> Save </button>
                :
                    <button className={'Todo-Item-Button'} type={'button'} onClick={() => {setShowEditView(!showEditView)}}> Edit </button>}
            </span>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.object,
    handleUpdateItems: PropTypes.func,
};


export default Item;

/* {
    "id": 1,
    "content": "Learn React",
    "completed": false
  } */