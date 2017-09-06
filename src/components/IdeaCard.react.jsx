import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Dimensions from 'react-dimensions'
import PropTypes from 'prop-types';


import style from '../style/IdeaCard.css';

const IdeaCard = (props) => {
  return (

    <div className={style.ideaCard} >
      <div className={style.header}>
        <img className={style.image} style={{
            width:props.containerWidth,
            height:props.containerWidth/1.618,
          }}
           alt="Baltimore rocks" src=
              {props.image ?
                props.image:
                "./img/Placeholder.jpg"}
          />
        <div className={style.databar} style={{
            width:props.containerWidth
          }}>

            <img className={style.icon} src="./img/heartlike.png" />
            {props.likeCount}



            <img className={style.icon} src="./img/devinterest.png" />
            {props.coderCount}


        </div>

      </div>

      <div className={style.content}>

      <Row>
          <Col xs={12}>
              <p className="itemDate">{props.createdAt}</p>
          </Col>
      </Row>
      <Row style={{
        maxHeight: 200,
        minHeight: 100
      }}>
        <Col xs={12}>
            <p className={style.ideaTitle}> {props.ideaTitle} </p>
            <p className={style.ideaAuthor}> <span className={style.ideaAuthorName}> -{props.userName}</span> </p>
        </Col>
      </Row>
      <Row style={{
          maxHeight: 400,
          minHeight: 200
      }}>
        <Col xs={12}>
          <p className={style.ideaDescriptionTitle}>Description:</p>
          <p className={style.ideaDescription}>{props.ideaDescription}</p>
        </Col>
        <Col xs={12} className={style.ideaSolution}>
          <p className={style.ideaDescriptionTitle}>Suggested Solution:</p>
          <p className={style.ideaDescription}>{props.ideaSolution}</p>
        </Col>
      </Row>
      </div>

    </div>


  );
}

IdeaCard.propTypes = {
  userName: PropTypes.string,
  ideaTitle: PropTypes.string,
  createdAt: PropTypes.string,
  ideaDescription: PropTypes.string,
  ideaSolution: PropTypes.string,
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  likeCount:PropTypes.number,
  coderCount:PropTypes.number,

};

export default Dimensions()(IdeaCard);
