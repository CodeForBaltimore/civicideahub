import React from 'react';
import Masonry from 'react-masonry-component'
import entry from "./entry.react"
import IdeaForm from './IdeaForm.react';
var masonryOptions = {
    transitionDuration: 0
};

var sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

class Entries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentWillMount() {    }
    // componentDidMount(){}
    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}


    render() {


        var childElements = sample.map(function (listValue, index) {
            return (
                <div key={index} className="image-element-class">
                    {entry(listValue.toString())}
                </div>
            );
        });

        return (

            <div>
                <Masonry className={'my-gallery-class'}>
                    {childElements}
                </Masonry>

            </div>
        );


    }

    // componentDidUpdate(){}
    // componentWillUnmount(){}
}

export default Entries;

