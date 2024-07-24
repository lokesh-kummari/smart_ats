import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Paper, Box, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import './App.css';

// Define a theme with custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Purple
    },
    secondary: {
      main: '#03dac6', // Teal
    },
    background: {
      default: '#f5f5f5', // Light gray
    },
    text: {
      primary: '#333', // Dark gray for text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const StyledPaper = styled(Paper)`
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  z-index: 1;
`;

const BackgroundContainer = styled.div`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 2rem;
`;

const App = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);
  const [response, setResponse] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!resume || !jobDescription) {
      setOpenSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append('jobDescription', jobDescription);
    formData.append('resume', resume);

    try {
      const result = await axios.post('http://localhost:5000/evaluate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <Container maxWidth="sm">
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom color="primary">
              Smart ATS
            </Typography>
            <Typography variant="body1" paragraph color="textPrimary">
              Improve Your Resume ATS
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  label="Job Description"
                  multiline
                  rows={4}
                  fullWidth
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  required
                  variant="outlined"
                  color="primary"
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Upload Resume"
                  type="file"
                  fullWidth
                  onChange={(e) => setResume(e.target.files[0])}
                  required
                  variant="outlined"
                  color="primary"
                />
              </Box>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit
              </Button>
            </form>
            {response && (
              <Box mt={3}>
                <Typography variant="h6" gutterBottom color="textPrimary">
                  ATS Evaluation Results
                </Typography>
                <Paper elevation={2} style={{ padding: '1rem', backgroundColor: '#f1f1f1' }}>
                  <Typography variant="body1" color="textPrimary">
                    <strong>Response:</strong> {response}
                  </Typography>
                </Paper>
              </Box>
            )}
          </StyledPaper>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity="warning">
              Please provide both a job description and a resume.
            </Alert>
          </Snackbar>
        </Container>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default App;
