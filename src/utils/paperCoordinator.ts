import { StructureAgent } from "./structureAgent";
import { ContentAgent } from "./contentAgent";
import { QualityAgent } from "./qualityAgent";
import { LengthAgent } from "./lengthAgent";
import { CompilationAgent } from "./compilationAgent";

export class PaperCoordinator {
  private structureAgent = new StructureAgent();
  private contentAgent = new ContentAgent();
  private qualityAgent = new QualityAgent();
  private lengthAgent = new LengthAgent();
  private compilationAgent = new CompilationAgent();

  async generatePaper(topic: string): Promise<string> {
    // Generate structure
    const sections = this.structureAgent.generateStructure(topic);

    // Generate content for each section
    const processedSections = await Promise.all(
      sections.map(async (section) => {
        let content = await this.contentAgent.generateSectionContent(
          topic,
          section.title,
          section.estimatedWords
        );

        // Review and improve content
        content = await this.qualityAgent.reviewContent(content);

        // Adjust length
        content = await this.lengthAgent.adjustContent(
          content,
          section.estimatedWords
        );

        return {
          title: section.title,
          content,
        };
      })
    );

    // Generate references
    const references = await this.contentAgent.generateReferences(topic);

    // Compile final paper
    const paper = this.compilationAgent.assemblePaper(
      processedSections,
      references
    );
    return this.compilationAgent.formatDocument(paper);
  }
}
