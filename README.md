# Smart ATS

Smart ATS is a web application designed to help users improve their resumes by evaluating them against a job description using a Large Language Model (LLM), specifically Google's Gemini AI model. The project is divided into two main parts: a React frontend and a Flask backend.

## Project Structure

smart-ats/
├── backend/
│ ├── server.py
│ ├── requirements.txt
│ └── .env
├── frontend/
│ ├── public/
│ │ └── ima.jpeg
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── index.js
│ ├── package.json
│ └── .env
└── README.md

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Configuration

Background Image: Place your background image (ima.jpeg) in the public directory. The background image is applied using CSS in src/App.css.

## Backend (Flask)
Setup
# 1.Navigate to the backend directory:
    cd backend
# 2.Create a virtual environment:
    python -m venv venv
# 3.Activate the virtual environment:
    Windows:
    venv\Scripts\activate
# 4.Install the dependencies:
    pip install -r requirements.txt
# 5.Create a .env file in the backend directory and add your API key:
    GOOGLE_API_KEY=your_google_api_key_here
# 6.Run the Flask server:
    python server.py
    Your Flask server should now be running on http://localhost:5000/.
## Requirements
   Create a requirements.txt file in the backend directory with the following content:
        Flask==2.0.3
        google-generativeai==0.1.0
        python-dotenv==0.21.0
        PyPDF2==3.0.1
## How It Works
   Frontend: The React frontend allows users to upload their resume (in PDF format) and paste a job description. It sends this data to the backend Flask server for processing.

    Backend: The Flask server performs the following tasks:

    Extracts text from the uploaded PDF resume.
    Sends the resume text and job description to the Gemini AI model for evaluation.
    Receives the evaluation results and sends them back to the frontend.
    Gemini AI Model: The Gemini AI model, accessed via the Google API, evaluates the resume against the job description. It provides a percentage match, missing keywords, and a profile summary.
## Usage
    Open the React application in your browser at http://localhost:3001/.

    Paste the job description into the provided text area.

    Upload your resume as a PDF file using the file uploader.

    Click "Submit" to receive the evaluation results.
## Contributing
    Feel free to open issues or submit pull requests. Contributions to improve the application are always welcome!
## License
    This project is licensed under the MIT License. See the LICENSE file for more details.
