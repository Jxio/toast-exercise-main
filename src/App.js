import React, { Component } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

import Chance from 'chance';
import './main.css';

function createMockFormSubmission() {
  const chance = new Chance();
  const formSubmission = {
    id: chance.guid(),
    data: {
      email: chance.email(),
      firstName: chance.first(),
      lastName: chance.last(),
      liked: false,
    },
  };
  return formSubmission;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: {}
    }
  }

  submissionsAddHandler () {
    var subs = this.state.submissions;
    var submission = createMockFormSubmission();
    subs[submission.id] = submission.data;
    this.setState({submissions: subs});
  }

  submissionsDeleteHandler (id) {
    var subs = this.state.submissions;
    delete subs[id];
    this.setState({submissions: subs});
  }

  render() {
    console.log(this.state.submissions)
    return <>
              <Header onAddChange={() => this.submissionsAddHandler()}/>
              <Container>
                <Content submissions={this.state.submissions} onDeleteChange={this.submissionsDeleteHandler.bind(this)}/>
              </Container>
            </>;
  }
}

export default App;
