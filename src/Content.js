import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchLikedFormSubmissions, saveFormSubmission } from './service/mockServer';
import { Button, IconButton, SnackbarContent, Stack } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: []
    }
  }
  componentDidMount() {
    this.fetchLikedFormSubmissionsFunction();
    this.interval = setInterval(() => this.fetchLikedFormSubmissionsFunction(), 5000);
  }
  fetchLikedFormSubmissionsFunction() {
    fetchLikedFormSubmissions().then((data) => {
      this.setState({likes: data.formSubmissions});
    });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const submissions = this.props.submissions;
    var snackBars = [];
    const likes = this.state.likes;

    for (var id of Object.keys(submissions)){
      var this_ = this;
      // eslint-disable-next-line no-loop-func
      (function(id){
        const currentForm = {
          id: id,
          data: {
            firstName: submissions[id].firstName,
            lastName: submissions[id].lastName,
            email: submissions[id].email,
            liked: false,
          },
        };
        const action = (
          <React.Fragment>
            <Button color="secondary" size="small" onClick={async () => {await saveFormSubmission(currentForm); this_.props.onDeleteChange(id)}}>
              LIKE
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              key={id}
              onClick={() => this_.props.onDeleteChange(id)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        );
        snackBars.push(<SnackbarContent
                        key={id}
                        open={true}
                        message={submissions[id].firstName + ', ' +
                          submissions[id].lastName+ ',\n' +
                          submissions[id].email}
                        action={action}
                      />);
      })(id)
    }

    return <Box sx={{marginTop: 3}}>
              <Typography variant="h4">Liked Form Submissions</Typography>

              <Typography component={'span'} variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
                <List>
                  {likes.map((item, index) => (
                    <ListItem key={item.id}>
                      {item.data.firstName} {item.data.lastName}: {item.data.email}
                    </ListItem>
                  ))}
                </List>
              </Typography>
              <Stack spacing={1} className='notification-stack'>
                {snackBars}
              </Stack>

            </Box>;
  }
}
