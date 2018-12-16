import React from 'react';
import ListComponent from './ListComponent';

import withContext from './context/withContext';

class ListPage extends React.Component {
    state = {
        itemName: '',
    };

    onChange = e => {
        this.setState({ itemName: e.target.value });
    }

    saveItem = () => {
        const { itemName } = this.state;
        const { addItem } = this.props.context;

        this.setState({ itemName: '' });
        addItem({ name: itemName });
    }

    render() {
        return (
            <React.Fragment>
                <input value={this.state.itemName} onChange={this.onChange}/>
                <button onClick={this.saveItem}> Add </button>
                <ListComponent />
            </React.Fragment>
        );
    }
}

export default withContext(ListPage);