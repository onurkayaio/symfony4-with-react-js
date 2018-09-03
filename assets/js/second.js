import React from 'react';
import SecondComponent from './components/secondComponent'
import ReactDOM from 'react-dom';

class Second extends React.Component {
    render() {
        return (
            <div>
                <SecondComponent/>
            </div>
        );
    }
}

ReactDOM.render(<Second/>, document.getElementById('secondRoot'));
