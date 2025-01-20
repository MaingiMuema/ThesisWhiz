interface Section {
  title: string;
  description: string;
  estimatedWords: number;
}

export class StructureAgent {
  private sections: Section[] = [];

  generateStructure(topic: string): Section[] {
    this.sections = [
      {
        title: "Introduction",
        description: `Introduction to "${topic}"`,
        estimatedWords: 500,
      },
      {
        title: "Literature Review",
        description: `Current research on ${topic}`,
        estimatedWords: 1000,
      },
      {
        title: "Methodology",
        description: "Research approach and methods",
        estimatedWords: 750,
      },
      {
        title: "Results",
        description: "Findings and data analysis",
        estimatedWords: 1000,
      },
      {
        title: "Discussion",
        description: "Interpretation of results",
        estimatedWords: 1000,
      },
      {
        title: "Conclusion",
        description: "Summary and implications",
        estimatedWords: 500,
      },
    ];

    return this.sections;
  }

  getSectionOutline(title: string): Section | undefined {
    return this.sections.find((section) => section.title === title);
  }
}
