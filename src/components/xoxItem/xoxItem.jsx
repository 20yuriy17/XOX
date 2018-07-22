import React from 'react';
import PropsTypes from 'prop-types';
import FlipMove from 'react-flip-move'


const XoxItem = ({item, swichName}) => {
    const gameArr = item.map(el => <li className='bb' key={el.id} data-liid={el.id} >{el.text}</li>);

    return(
        <FlipMove>
        <ul className='Cover' onClick={swichName}>
                {gameArr}
        </ul>
        </FlipMove>
    )
};

XoxItem.propTypes = {
    item: PropsTypes.arrayOf(PropsTypes.shape({
        text: PropsTypes.string,
        id: PropsTypes.number,
    })),
    swichName: PropsTypes.func,
};

export default XoxItem;