import React, { Component } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: {}
    }
  }

  submissionsAddHandler (submission) {
    var subs = this.state.submissions;
    subs[submission.id] = submission.data;
    this.setState({submissions: subs});
  }

  submissionsDeleteHandler (submission) {
    var subs = this.state.submissions;
    delete subs[submission.id];
    this.setState({submissions: subs});
  }

  render() {
    return <>
              <Header />
              <Container>
                <Content />
              </Container>
            </>;
  }
}

export default App;
