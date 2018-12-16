import React from 'react';
import { LocalStorageContext } from './ContextProvider';

export default function withLocalStorageContext(Component) {
    return function WrapperComponent(props) {
        return (
            <LocalStorageContext.Consumer>
                {state => <Component {...props} context={state} />}
            </LocalStorageContext.Consumer>
        )
    }
}