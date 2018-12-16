import React from 'react';

import ListItem from './ListItemComponent';

import withContext from './context/withContext';

const ListComponent = ({ context }) => (
    <ul>
        { context.items.map(item => (
            <ListItem key={item.id} item={item} onRemoveClick={context.removeItem}/>
        ))}
    </ul>
)

export default withContext(ListComponent);