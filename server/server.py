from flask import Flask, request, jsonify
from flask_cors import CORS
import PyPDF2 as pdf
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Configure Google Generative AI
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_gemini_response(resume_text, job_description):
    model = genai.GenerativeModel('gemini-pro')
    input_prompt = f"""
    Hey Act Like a skilled or very experience ATS(Application Tracking System)
    with a deep understanding of tech field, software engineering, data science, data analyst
    and big data engineer. Your task is to evaluate the resume based on the given job description.
    You must consider the job market is very competitive and you should provide 
    best assistance for improving the resumes. Assign the percentage Matching based 
    on JD and the missing keywords with high accuracy.
    resume: {resume_text}
    description: {job_description}
    
    I want the response in one single string having the structure
    {{ "JD Match": "%", "MissingKeywords": [], "Profile Summary": "" }}
    """
    response = model.generate_content(input_prompt)
    return response.text

def extract_text_from_pdf(uploaded_file):
    reader = pdf.PdfReader(uploaded_file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text

@app.route('/evaluate', methods=['POST'])
def evaluate():
    job_description = request.form.get('jobDescription')
    resume_file = request.files.get('resume')

    if not resume_file or not job_description:
        return jsonify({"error": "Job description and resume are required"}), 400

    resume_text = extract_text_from_pdf(resume_file)
    response_text = get_gemini_response(resume_text, job_description)
    
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(port=5000)
