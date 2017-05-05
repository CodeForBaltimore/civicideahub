import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import style from '../style/IdeaCard.css';

const IdeaCard = (props) => {
  return (
  <div>
      <Col className={style.ideaCard}>
        <Col xs={12} md={8}>
            <p className={style.ideaTitle}> {props.ideaTitle} </p>
            <p className={style.ideaAuthor}> <span className={style.ideaAuthorName}> -{props.userName}</span> </p>
        </Col>
        <Col xs={6} md={4}>
            <img border="0" alt="Placeholder" src="http://www.gemologyproject.com/wiki/images/5/5f/Placeholder.jpg" width="75" height="75" />
        </Col>
        <div>
          <p className={style.ideaDescriptionTitle}>Description:</p>
          <p className={style.ideaDescription}>{props.ideaDescription}</p>
        </div>
        <div className={style.ideaSolution}>
          <p className={style.ideaDescriptionTitle}>Suggested Solution:</p>
          <p className={style.ideaDescription}>{props.ideaSolution}</p>
        </div>
      </Col>
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