import React from 'react';

class ListItem extends React.Component {
    removeItem = () => {
        this.props.onRemoveClick(this.props.item.id);
    };

    render() {
        return (
            <li>
                { this.props.item.name }
                <button onClick={this.removeItem}>&#10005;</button>
            </li>
        );
    }
}

export default ListItem;