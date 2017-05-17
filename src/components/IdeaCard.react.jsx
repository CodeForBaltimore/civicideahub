import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Dimensions from 'react-dimensions'
import PropTypes from 'prop-types';


import style from '../style/IdeaCard.css';

const IdeaCard = (props) => {
  return (

    <div className={style.ideaCard}>
      <img style={{
          width:props.containerWidth,
          height:props.containerWidth/1.618
        }}
        className={style.image} alt="Placeholder" src="http://www.gemologyproject.com/wiki/images/5/5f/Placeholder.jpg" />
      <div className={style.content}>


      <Row>
        <Col xs={12}>
            <p className={style.ideaTitle}> {props.ideaTitle} </p>
            <p className={style.ideaAuthor}> <span className={style.ideaAuthorName}> -{props.userName}</span> </p>
        </Col>
      </Row>
      <Row>
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
  ideaDescription: PropTypes.string,
  ideaSolution: PropTypes.string,
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number

};

export default Dimensions()(IdeaCard);
