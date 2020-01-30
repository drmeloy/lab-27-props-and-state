import React from 'react';
import PropTypes from 'prop-types';
import { zoo } from '../../services/madlib';
import styles from './Result.css';

const Result = ({ words, closeResult }) => (
  <div className={styles.Result}>
    <p>{zoo(...words)}</p>
    <button onClick={closeResult}>Start over</button>
  </div>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;
