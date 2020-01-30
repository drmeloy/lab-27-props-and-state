import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './Madlib.css';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: []
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    const elArray = event.target.children;
    let wordsArray = [];

    for (let i = 0; i < elArray.length - 1; i++){
      wordsArray.push(elArray[i].value);
    }

    this.setState({ words: wordsArray });
    this.toggleResult();
  }

  clearForm = event => {
    event.preventDefault();
    const elArray = event.target.children;
    for (let i = 0; i < elArray.length - 1; i++){
      elArray[i].value = '';
    }
  }

  render() {
    const { showResult, words } = this.state;
    
    return (
      <>
        <Header />
        <p className={styles.Title}>Fill out this MadLib for a fun story!</p>
        {!showResult && <Form onSubmit={this.handleSubmit} />}
        {showResult && <Result words={words} closeResult={this.toggleResult} />}
        <Footer />
      </>
    );
  }
}
