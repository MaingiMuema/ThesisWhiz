import { generateResearchPaper } from "@/lib/api";

export class ContentAgent {
  async generateSectionContent(
    topic: string,
    section: string,
    wordCount: number
  ): Promise<string> {
    const prompt = `Write a ${wordCount}-word ${section} section for a research paper about "${topic}". 
                   Follow academic writing standards and maintain scholarly tone.`;

    const content = await generateResearchPaper(prompt);
    return content;
  }

  async generateReferences(topic: string): Promise<string> {
    const prompt = `Generate a list of academic references for a research paper about "${topic}".
                   Include recent scholarly sources formatted in APA style.`;

    const references = await generateResearchPaper(prompt);
    return references;
  }
}
