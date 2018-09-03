import React from 'react'

class SecondComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "title goes here.",
            body: "body goes here."
        }
    }


    render() {
        return (
            <div>
                <h3>
                    {this.state.title}
                </h3>
                <p>
                    {this.state.body}
                </p>
            </div>
        )
    }
}

export default SecondComponent;
