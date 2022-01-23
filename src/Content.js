import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchLikedFormSubmissions, onMessage } from './service/mockServer';
import { Button, IconButton, Snackbar, SnackbarContent, Stack } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

export default class Content extends Component {
  componentDidMount() {
    // fetchLikedFormSubmissions().then((data) => {
    //   console.log(data);
      // formSubmissions: Array(1)
      //   0: {id: 'e320efa6-929d-527f-905a-7114f5d0ace2', data: {…}}
    // })
  }
  render() {
    const submissions = this.props.submissions;
    var snackBars = [];

    for (var id of Object.keys(submissions)){
      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => this.props.onDeleteChange(id)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

      snackBars.push(<SnackbarContent
                        key={id}
                        open={true}
                        message={submissions[id].firstName + ', ' +
                          submissions[id].lastName+ '\n' +
                          submissions[id].email}
                        action={action}
                      />);
    }

    return <Box sx={{marginTop: 3}}>
              <Typography variant="h4">Liked Form Submissions</Typography>

              <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
                TODO: List of liked submissions here (delete this line)
              </Typography>
              <Stack spacing={1} className='notification-stack'>
                {snackBars}
              </Stack>

            </Box>;
  }
}
