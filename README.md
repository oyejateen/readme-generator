<div align="center">
  <img src="https://readmegenie.vercel.app/auth.png" alt="README Genie Logo" width="200"/>
  <h1>README Genie</h1>
  <p>AI-Powered README Generator for GitHub Repositories</p>
  <a href="https://readmegenie.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Live%20Site-green" alt="Live Site"/>
  </a>
  <a href="https://github.com/oyejateen/readme-generator" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Frontend%20Repo-blue" alt="Frontend Repo"/>
  </a>
  <a href="https://github.com/oyejateen/readme-genie-script" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Backend%20Repo-blue" alt="Backend Repo"/>
  </a>
  <a href="https://buymeacoffee.com/heyjateen" target="_blank">
    <img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-yellow" alt="Donate"/>
  </a>
</div>

## 🚀 Introduction

README Genie is an AI-powered tool that simplifies the process of generating professional README files for your GitHub repositories. Created as a hackathon project in just one night, this application allows users to create comprehensive READMEs in three easy steps:

1. Authenticate with GitHub
2. Select your repository
3. Generate your README

With README Genie, you can streamline your documentation process and showcase your projects effectively.

## 🛠️ How We Built It

README Genie was developed as a solo project by [Jatin](https://github.com/oyejateen) in a single night, embracing the spirit of a hackathon. The project combines modern web technologies with AI to create a seamless user experience.

### Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
  - Vite (for build tooling)

- **Backend:**
  - Node.js
  - Express

- **AI Integration:**
  - Google Generative AI (Gemini Pro model)

- **Authentication:**
  - GitHub OAuth

- **Deployment:**
  - Vercel (for both frontend and backend)

## 🏃‍♂️ Running the Project Locally

To run README Genie on your local machine, follow these steps:

### Frontend Setup

1. Clone the frontend repository:
   ```
   git clone https://github.com/oyejateen/readme-generator.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following contents:
   ```
   VITE_GITHUB_API_URL=https://api.github.com
   VITE_GITHUB_CLIENT_ID=your_github_client_id
   VITE_GITHUB_REDIRECT_URI=http://localhost:3000/callback
   VITE_SERVER_URL=http://localhost:5000
   VITE_GOOGLE_API_KEY=your_google_api_key
   ```

4. Start the frontend development server:
   ```
   npm run dev
   ```

### Backend Setup

1. Clone the backend repository:
   ```
   git clone https://github.com/oyejateen/readme-genie-script.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following contents:
   ```
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

4. Start the backend server:
   ```
   npm start
   ```

5. The backend server will run on `http://localhost:5000`.

## 🔑 API Keys Required

To run README Genie, you'll need the following API keys:

1. **GitHub OAuth App Credentials:**
   - Create a new OAuth App in your GitHub Developer Settings
   - Set the Authorization callback URL to `http://localhost:3000/callback` for local development
   - Use the provided Client ID and Client Secret in your environment variables

2. **Google AI API Key:**
   - Sign up for Google AI Platform and create a new project
   - Generate an API key for the Gemini Pro model
   - Use this key in your frontend environment variables

## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/oyejateen">
        <img src="https://avatars.githubusercontent.com/u/75193966?v=4" width="100px;" alt="Jateen"/>
        <br />
        <sub><b>Jateen</b></sub>
      </a>
      <br />
      <a href="#" title="Code">💻</a>
      <a href="#" title="Design">🎨</a>
      <a href="#" title="Ideas">🤔</a>
    </td>
  </tr>
</table>

## 🤝 Contributing

README Genie is an open-source project, and we welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository (frontend or backend)
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <br />
  <p>Made with Typescipt by <a href="https://github.com/oyejateen">Jateen</a></p>
  <p>
    <a href="https://github.com/oyejateen" target="_blank">GitHub</a> •
    <a href="https://x.com/oyejateen" target="_blank">Twitter</a> •
    <a href="https://instagram.com/heyjateen" target="_blank">Instagram</a> •
    <a href="https://linkedin.com/in/oyejateen" target="_blank">LinkedIn</a>
  </p>
</div>
