
import { cn } from "@/lib/utils";

const textStyles = [
  {
    name: "Display",
    className: "text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8",
    element: "h1",
    sample: "Display Heading",
    usage: "Hero sections, main page titles",
    spacing: "mb-8 (2rem)"
  },
  {
    name: "Heading 1",
    className: "text-4xl font-bold tracking-tight leading-tight mb-6",
    element: "h1",
    sample: "Heading One",
    usage: "Page titles, major section headers",
    spacing: "mb-6 (1.5rem)"
  },
  {
    name: "Heading 2",
    className: "text-3xl font-bold leading-tight mb-4",
    element: "h2",
    sample: "Heading Two",
    usage: "Section headers, important content",
    spacing: "mb-4 (1rem)"
  },
  {
    name: "Heading 3",
    className: "text-2xl font-semibold leading-tight mb-3",
    element: "h3",
    sample: "Heading Three",
    usage: "Sub-section headers, card titles",
    spacing: "mb-3 (0.75rem)"
  },
  {
    name: "Heading 4",
    className: "text-xl font-semibold leading-snug mb-3",
    element: "h4",
    sample: "Heading Four",
    usage: "Minor section headers",
    spacing: "mb-3 (0.75rem)"
  },
  {
    name: "Large Text",
    className: "text-lg leading-relaxed mb-4",
    element: "p",
    sample: "Large text is used for important paragraphs that need emphasis and better readability.",
    usage: "Featured content, introduction paragraphs",
    spacing: "mb-4 (1rem)"
  },
  {
    name: "Body",
    className: "text-base leading-relaxed mb-4",
    element: "p",
    sample: "This is regular body text used for the main content of the page. It should be easy to read and have good contrast with proper line spacing.",
    usage: "Main content text",
    spacing: "mb-4 (1rem)"
  },
  {
    name: "Small",
    className: "text-sm leading-normal mb-2",
    element: "p",
    sample: "Small text is used for less important information that doesn't need to stand out but still needs proper spacing.",
    usage: "Secondary information, metadata",
    spacing: "mb-2 (0.5rem)"
  },
  {
    name: "Muted",
    className: "text-sm text-muted-foreground leading-normal mb-2",
    element: "p",
    sample: "Muted text is used for helper text and less important information with subtle styling.",
    usage: "Helper text, captions, secondary information",
    spacing: "mb-2 (0.5rem)"
  },
  {
    name: "Link",
    className: "text-primary hover:underline cursor-pointer leading-normal",
    element: "a",
    sample: "Click here to learn more",
    usage: "Hyperlinks, clickable text",
    spacing: "inline (no margin)"
  },
  {
    name: "Code",
    className: "text-sm bg-muted p-3 rounded leading-relaxed mb-4 block",
    element: "code",
    sample: 'const greeting = "Hello, world!";',
    usage: "Code snippets, technical content",
    spacing: "mb-4 (1rem) with p-3 internal"
  }
];

const fontWeights = [
  { name: "Light", weight: 300, className: "font-light" },
  { name: "Regular", weight: 400, className: "font-normal" },
  { name: "Medium", weight: 500, className: "font-medium" },
  { name: "Semibold", weight: 600, className: "font-semibold" },
  { name: "Bold", weight: 700, className: "font-bold" }
];

const spacingGuidelines = [
  { name: "Section Spacing", value: "mb-12 (3rem)", usage: "Between major sections" },
  { name: "Component Spacing", value: "mb-8 (2rem)", usage: "Between components" },
  { name: "Content Spacing", value: "mb-6 (1.5rem)", usage: "Between content blocks" },
  { name: "Element Spacing", value: "mb-4 (1rem)", usage: "Between related elements" },
  { name: "Tight Spacing", value: "mb-2 (0.5rem)", usage: "Between closely related items" },
  { name: "Line Height", value: "leading-relaxed", usage: "For body text readability" },
  { name: "Tight Line Height", value: "leading-tight", usage: "For headings and titles" },
];

export default function Typography() {
  return (
    <div className="space-y-12">
      {/* Text Styles */}
      <div>
        <h3 className="text-lg font-medium mb-6">Text Styles with Spacing</h3>
        <div className="border rounded-lg overflow-hidden divide-y">
          {textStyles.map((style, index) => {
            const Element = style.element as keyof JSX.IntrinsicElements;
            
            return (
              <div key={index} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="lg:w-2/3">
                    <Element className={style.className}>
                      {style.sample}
                    </Element>
                  </div>
                  <div className="lg:w-1/3 space-y-2">
                    <p className="font-medium">{style.name}</p>
                    <p className="text-xs text-muted-foreground">{style.usage}</p>
                    <div className="space-y-1">
                      <code className="text-xs bg-muted p-1 rounded block">{style.className}</code>
                      <p className="text-xs text-green-600 font-medium">Spacing: {style.spacing}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacing Guidelines */}
      <div>
        <h3 className="text-lg font-medium mb-6">Spacing Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {spacingGuidelines.map((guideline) => (
            <div key={guideline.name} className="border rounded-lg p-4">
              <p className="font-medium mb-1">{guideline.name}</p>
              <code className="text-sm bg-muted p-2 rounded block mb-2">{guideline.value}</code>
              <p className="text-xs text-muted-foreground">{guideline.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div>
        <h3 className="text-lg font-medium mb-6">Font Weights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="border rounded-lg p-4">
              <p className={cn("text-2xl mb-3", weight.className)}>Aa Bb Cc</p>
              <div className="space-y-1">
                <p className="font-medium">{weight.name}</p>
                <p className="text-xs text-muted-foreground">{weight.weight}</p>
                <code className="text-xs bg-muted p-1 rounded block">{weight.className}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Font Families */}
      <div>
        <h3 className="text-lg font-medium mb-6">Font Families</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="border rounded-lg p-6">
            <h4 className="font-sans text-2xl mb-4 leading-tight">DM Sans (Sans-serif)</h4>
            <p className="font-sans mb-6 leading-relaxed">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
            <code className="text-xs bg-muted p-2 rounded block mb-3">font-sans</code>
            <p className="text-sm text-muted-foreground leading-normal">Used for all general UI text, headings, and content.</p>
          </div>
        </div>
      </div>

      {/* Typography Guidelines */}
      <div className="p-6 bg-muted rounded-lg">
        <h3 className="text-sm font-medium mb-4">Typography Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
          <li>Maintain a clear visual hierarchy with appropriate heading levels and consistent spacing</li>
          <li>Use proper semantic HTML elements (h1, h2, p, etc.) for accessibility</li>
          <li>Limit line length to 80 characters or less for optimal readability</li>
          <li>Ensure sufficient color contrast between text and background</li>
          <li>Use consistent font sizes, weights, and spacing throughout the application</li>
          <li>Apply proper line heights: tight for headings, relaxed for body text</li>
          <li>Use margin-bottom consistently to create rhythm and visual flow</li>
        </ul>
      </div>
    </div>
  );
}
