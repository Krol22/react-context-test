import React from 'react';

import ListItem from './ListItemComponent';
import { LocalStorageContext } from './context/ContextProvider';

const ListComponent = ({ items }) => (
    <LocalStorageContext.Consumer>
        {({removeItem}) => (
            <ul>
                { items.map(item => (
                    <ListItem key={item.id} item={item} onRemoveClick={removeItem}/>
                ))}
            </ul>
        )}
    </LocalStorageContext.Consumer>
)

export default ListComponent;