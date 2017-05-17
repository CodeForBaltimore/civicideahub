import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import style from '../style/IdeaCard.css';

const IdeaCard = (props) => {
  return (

    <div className={style.ideaCard}>
      <Row>
        <Col xs={9} md={8}>
            <p className={style.ideaTitle}> {props.ideaTitle} </p>
            <p className={style.ideaAuthor}> <span className={style.ideaAuthorName}> -{props.userName}</span> </p>
        </Col>
        <Col xs={3} md={4} >
            <img className={style.image} alt="Placeholder" src="http://www.gemologyproject.com/wiki/images/5/5f/Placeholder.jpg" />
        </Col>
      </Row>
      <div>
        <p className={style.ideaDescriptionTitle}>Description:</p>
        <p className={style.ideaDescription}>{props.ideaDescription}</p>
      </div>
      <div className={style.ideaSolution}>
        <p className={style.ideaDescriptionTitle}>Suggested Solution:</p>
        <p className={style.ideaDescription}>{props.ideaSolution}</p>
      </div>
    </div>


  );
}

IdeaCard.propTypes = {
  userName: React.PropTypes.string,
  ideaTitle: React.PropTypes.string,
  ideaDescription: React.PropTypes.string,
  ideaSolution: React.PropTypes.string
};

export default IdeaCard;
