interface PaperSection {
  title: string;
  content: string;
}

export class CompilationAgent {
  assemblePaper(sections: PaperSection[], references: string): string {
    let paper = "";

    // Add title page
    paper += "Title Page\n\n";

    // Add sections
    for (const section of sections) {
      paper += `\n# ${section.title}\n\n`;
      paper += `${section.content}\n`;
    }

    // Add references
    paper += "\n# References\n\n";
    paper += references;

    return paper;
  }

  formatDocument(content: string): string {
    // Apply academic formatting
    const formatted = content
      .replace(/\n{3,}/g, "\n\n") // Normalize spacing
      .replace(/([.!?])\s*/g, "$1 "); // Fix sentence spacing

    return formatted;
  }
}
