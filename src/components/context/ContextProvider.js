import React from 'react';

export const LocalStorageContext = React.createContext();

const guidGenerator = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const updateLocalStorage = (items) => {
    localStorage.setItem('MyList', JSON.stringify(items));
}

export default class LocalStorageProvider extends React.Component {
    state = {
        items: [],
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('MyList')) || [];

        this.setState({
            items
        });
    }

    addItem = item => {
        item.id = guidGenerator();
        const items = [item, ...this.state.items];

        this.setState({
            items
        });

        updateLocalStorage(items);
    }

    removeItem = (id) => {
        const items = this.state.items.filter(item => item.id !== id);

        this.setState({
            items, 
        });

        updateLocalStorage(items);
    }

    render() {
        return(
            <LocalStorageContext.Provider value={{
                items: this.state.items,
                addItem: this.addItem, 
                removeItem: this.removeItem,
            }}>
                { this.props.children }
            </LocalStorageContext.Provider>
        );
    }

}