import React from 'react';
import Masonry from 'react-masonry-component'
// import entry from "./entry.react"
import IdeaCard from './IdeaCard.react';
import {Grid, Row, Col} from 'react-bootstrap';
import IdeaForm from './IdeaForm.react';
var masonryOptions = {
    transitionDuration: 0
};


var sample = [0,1,2,3,4,5,6,7,8,9,10,11]
const sampleData = [
      {
          ideaTitle: "Nick's good idea",
          userName: "NickShater",
          ideaDescription: "Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck",
          ideaSolution: "More people like me",
          key: 1
      },
      {
          ideaTitle: "Sean's bad idea",
          userName: "SeanA",
          ideaDescription: "Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "Ruin the meetup",
          key: 2
      },
      {
          ideaTitle: "Kaladas mediocre idea",
          userName: "Kalada O",
          ideaDescription: "I'm bored with making these. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "You know the drill",
          key: 3
      },
      {
          ideaTitle: "Dicky idea also",
          userName: "dickyg",
          ideaDescription: "placeholder. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "done",
          key: 4
      },
          {
          ideaTitle: "Nick's good idea",
          userName: "NickShater",
          ideaDescription: "Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck",
          ideaSolution: "More people like me",
          key: 5
      },
      {
          ideaTitle: "Sean's bad idea",
          userName: "SeanA",
          ideaDescription: "Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "Ruin the meetup",
          key: 6
      },
      {
          ideaTitle: "Kaladas mediocre idea",
          userName: "Kalada O",
          ideaDescription: "I'm bored with making these. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "You know the drill",
          key: 7
      },
      {
          ideaTitle: "Dicky idea also",
          userName: "dickyg",
          ideaDescription: "placeholder. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "done",
          key: 8
      }
    ]


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



      var childElements = sampleData.map((listValue, index) => {
           return (
                  <Col sm={6} md={3} key={listValue.key}>
                    <IdeaCard
                          ideaTitle={listValue.ideaTitle}
                          userName={listValue.userName}
                          ideaDescription={listValue.ideaDescription}
                          ideaSolution={listValue.ideaSolution}
                    />
                  </Col>

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
