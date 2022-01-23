import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchLikedFormSubmissions, onMessage } from './service/mockServer';
import { Snackbar } from '@mui/material';

export default class Content extends Component {
  componentDidMount() {
    // fetchLikedFormSubmissions().then((data) => {
    //   console.log(data);
      // formSubmissions: Array(1)
      //   0: {id: 'e320efa6-929d-527f-905a-7114f5d0ace2', data: {…}}
    // })
  }
  render() {
    return <Box sx={{marginTop: 3}}>
              <Typography variant="h4">Liked Form Submissions</Typography>

              <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
                TODO: List of liked submissions here (delete this line)
              </Typography>
              <Snackbar
                open={true}
                autoHideDuration={6000}
                // onClose={handleClose}
                message="Note archived"
                // action={action}
              />
            </Box>;
  }
}
