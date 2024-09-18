import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see .env.local file)
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateReadme = async (repoContent: string): Promise<string> => {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Generate a comprehensive README for the following GitHub repository:\n\n${repoContent}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error generating README:', error);
    throw new Error('Failed to generate README');
  }
};