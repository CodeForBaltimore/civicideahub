import React from 'react';
import Masonry from 'react-masonry-component'
// import entry from "./entry.react"
import IdeaCard from './IdeaCard.react';
import {Grid, Row, Col} from 'react-bootstrap';
import IdeaForm from './IdeaForm.react';
import EntryDataStore from "../stores/EntryData.store.js"

var masonryOptions = {
    transitionDuration: 0
};


class Entries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          entries:EntryDataStore.getEntries()
        }

        this.updateEntryData = this.updateEntryData.bind(this)
    }

    updateEntryData(){
      this.setState({
        entries:EntryDataStore.getEntries()
      })
    }

    // componentWillMount() {    }
    componentDidMount(){
      EntryDataStore.addChangeListener(this.updateEntryData)

    }
    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}


    render() {



      var childElements = this.state.entries.map((listValue, index) => {
           return (
                  <Col xs={12} sm={6} md={6} lg={4} key={listValue._id}>
                    <IdeaCard
                          ideaTitle={listValue.ideaTitle}
                          userName={listValue.userName}
                          ideaDescription={listValue.ideaDescription}
                          ideaSolution={listValue.ideaSolution}
                          likeCount={listValue.likeCount}
                          coderCount={listValue.coderCount}
                          image={listValue.image}
                    />
                  </Col>

            );
        });

        return (

            <div style={{marginBottom:"100px"}}>
                <Masonry className={'my-gallery-class'}>
                    {childElements}
                </Masonry>

            </div>
        );


    }

    // componentDidUpdate(){}
    componentWillUnmount(){
      EntryDataStore.removeChangeListener(this.updateEntryData())

    }
}

export default Entries;
