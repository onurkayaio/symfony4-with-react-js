import React from 'react';
import FirstComponent from './components/firstComponent'
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
