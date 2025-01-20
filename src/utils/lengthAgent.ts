export class LengthAgent {
  private wordCountPerPage = 500;

  calculateWordCount(text: string): number {
    return text.trim().split(/\s+/).length;
  }

  async adjustContent(content: string, targetWords: number): Promise<string> {
    const currentWords = this.calculateWordCount(content);

    if (Math.abs(currentWords - targetWords) <= targetWords * 0.1) {
      return content; // Within 10% margin
    }

    // If content needs expansion or reduction, we'll need to regenerate
    // This would typically call back to the ContentAgent with adjusted parameters
    return content;
  }

  estimatePages(wordCount: number): number {
    return Math.ceil(wordCount / this.wordCountPerPage);
  }
}
