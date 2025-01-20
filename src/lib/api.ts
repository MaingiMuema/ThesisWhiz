const API_URL = "https://api.hyperbolic.xyz/v1/chat/completions";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYW5saWtlbWFpbmdpQGdtYWlsLmNvbSIsImlhdCI6MTczNTMxNDIwMX0.dy4jANPuzStUYy46hyD5HUVm0mHBZ0aidd7B55wvpIw";

interface ChatResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function generateResearchPaper(prompt: string): Promise<string> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "deepseek-ai/DeepSeek-V3",
      max_tokens: 512,
      temperature: 0.1,
      top_p: 0.9,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate research paper");
  }

  const data: ChatResponse = await response.json();
  return data.choices[0]?.message?.content || "";
}
