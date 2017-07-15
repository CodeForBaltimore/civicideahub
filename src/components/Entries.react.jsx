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

    sortEntriesByDate() {
        let date_sorted_entries = this.state.entries.sort((a,b) => {
            return new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
        }).reverse();

        return date_sorted_entries;
    }

    convertDateFormat(items) {
        let convertedDateFormat = items.map((itemValue, index) => {
            let dateObject = new Date(itemValue.createdAt);
            let day = dateObject.getDate();
            let month = dateObject.getMonth();
            let year = dateObject.getFullYear();

            itemValue.createdAt = month + '/' + day + '/' + year;
            return itemValue;
        });

        return convertedDateFormat;
    }

    // componentWillMount() {    }
    componentDidMount(){
      EntryDataStore.addChangeListener(this.updateEntryData)

    }
    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}


    render() {

        let itemsSortedByDate = this.sortEntriesByDate();
        let itemsWithDateConverted = this.convertDateFormat(itemsSortedByDate);

        let childElements = itemsWithDateConverted.map((listValue, index) => {
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
                          createdAt={listValue.createdAt}
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
