
import React from 'react';
import style from "../style/entry.css"


const Entry = (labelText) => (
  <div className={style.entryStyle} >
    <p>
      Entry {labelText}
    </p>
  </div>
);

Entry.propTypes = {
  labelText: React.PropTypes.string
};

export default Entry;
