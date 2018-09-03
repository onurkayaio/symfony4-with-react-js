import React from 'react'

class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <p>hello world.</p>
                <a href={'/second'}>go to the post.</a>
            </div>
        )
    }
}

export default FirstComponent;
