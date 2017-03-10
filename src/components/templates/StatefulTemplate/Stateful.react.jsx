import React from 'react';

class StatefulTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: true,
            sample2: false,
        }
    }
    
    componentWillMount() {
        this.setState({sample3: true});
    }
    
    render() {
        return(
            <div>
                <h1>This is a sample template</h1>
            </div>
        );
    }
}

export default StatefulTemplate;
