import PropTypes from 'prop-types';
import Item from "./Item";

const Items = ({items, handleUpdateItems}) => {

    return (
        <ul className={'Todo-List'}>
            {
                items.map((item) => {
                    return (
                        <Item key={item.id} item={item} handleUpdateItems={handleUpdateItems}/>
                    )
                })
            }
        </ul>
    );
};

Items.propTypes = {
    items: PropTypes.array,
    handleUpdateItems: PropTypes.func,
};


export default Items;