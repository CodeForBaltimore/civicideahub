import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import style from '../style/IdeaCard.css';

const IdeaCard = (props) => {
  return (
  <div>
      <Col className={style.ideaCard}>
        <div>
          <p className={style.ideaTitle}>{props.ideaTitle}</p>
          <p>Submitted By: <span className={style.ideaAuthor}>{props.userName}</span></p>
        </div>
        <div className={style.ideaDescription}>
          <strong>Description:</strong>
          <p>{props.ideaDescription}</p>
        </div>
        <div className={style.ideaSolution}>
          <strong>Suggested Solution:</strong>
          <p>{props.ideaSolution}</p>
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