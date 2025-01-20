"use client";

import { useState } from "react";
import { generateResearchPaper } from "@/lib/api";

export default function AIPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const generatedText = await generateResearchPaper(prompt);
      setResult(generatedText);
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to generate research paper. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <h1 className="text-3xl font-bold mb-8">Research Paper Generator</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your research topic or prompt..."
              className="w-full h-32 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Paper"}
            </button>
          </div>
        </form>

        {result && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Generated Result:</h2>
            <div className="prose dark:prose-invert max-w-none">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
}
