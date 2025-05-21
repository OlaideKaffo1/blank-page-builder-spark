
import { cn } from "@/lib/utils";

type ColorVariant = {
  name: string;
  variable: string;
  className: string;
};

type ColorShade = {
  shade: string;
  variable: string;
  className: string;
};

// Main colors and their variants
const colorVariants: ColorVariant[] = [
  { name: "Primary", variable: "--primary", className: "bg-primary" },
  { name: "Secondary", variable: "--secondary", className: "bg-secondary" },
  { name: "Accent", variable: "--accent", className: "bg-accent" },
  { name: "Muted", variable: "--muted", className: "bg-muted" },
  { name: "Destructive", variable: "--destructive", className: "bg-destructive" },
  { name: "Success", variable: "--success", className: "bg-success" },
  { name: "Warning", variable: "--warning", className: "bg-warning" },
  { name: "Info", variable: "--info", className: "bg-info" },
];

// Shades for primary and secondary
const primaryShades: ColorShade[] = [
  { shade: "50", variable: "--primary-50", className: "bg-primary-50" },
  { shade: "100", variable: "--primary-100", className: "bg-primary-100" },
  { shade: "200", variable: "--primary-200", className: "bg-primary-200" },
  { shade: "300", variable: "--primary-300", className: "bg-primary-300" },
  { shade: "400", variable: "--primary-400", className: "bg-primary-400" },
  { shade: "500", variable: "--primary-500", className: "bg-primary-500" },
  { shade: "600", variable: "--primary-600", className: "bg-primary-600" },
  { shade: "700", variable: "--primary-700", className: "bg-primary-700" },
  { shade: "800", variable: "--primary-800", className: "bg-primary-800" },
  { shade: "900", variable: "--primary-900", className: "bg-primary-900" },
];

const secondaryShades: ColorShade[] = [
  { shade: "50", variable: "--secondary-50", className: "bg-secondary-50" },
  { shade: "100", variable: "--secondary-100", className: "bg-secondary-100" },
  { shade: "200", variable: "--secondary-200", className: "bg-secondary-200" },
  { shade: "300", variable: "--secondary-300", className: "bg-secondary-300" },
  { shade: "400", variable: "--secondary-400", className: "bg-secondary-400" },
  { shade: "500", variable: "--secondary-500", className: "bg-secondary-500" },
  { shade: "600", variable: "--secondary-600", className: "bg-secondary-600" },
  { shade: "700", variable: "--secondary-700", className: "bg-secondary-700" },
  { shade: "800", variable: "--secondary-800", className: "bg-secondary-800" },
  { shade: "900", variable: "--secondary-900", className: "bg-secondary-900" },
];

// Semantic colors
const semanticColors: ColorVariant[] = [
  { name: "Background", variable: "--background", className: "bg-background" },
  { name: "Foreground", variable: "--foreground", className: "bg-foreground text-background" },
  { name: "Card", variable: "--card", className: "bg-card" },
  { name: "Card Foreground", variable: "--card-foreground", className: "bg-card-foreground text-background" },
  { name: "Popover", variable: "--popover", className: "bg-popover" },
  { name: "Popover Foreground", variable: "--popover-foreground", className: "bg-popover-foreground text-background" },
  { name: "Border", variable: "--border", className: "bg-border" },
  { name: "Input", variable: "--input", className: "bg-input" },
];

export default function ColorPalette() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-medium mb-4">Main Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {colorVariants.map((color) => (
            <div key={color.name} className="border rounded-lg overflow-hidden">
              <div className={cn("h-24", color.className)} />
              <div className="p-3">
                <p className="font-medium">{color.name}</p>
                <code className="text-xs text-muted-foreground">{color.variable}</code>
                <p className="text-xs mt-1 font-mono">{color.className}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Primary Shades</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {primaryShades.map((shade) => (
            <div key={shade.shade} className="border rounded-lg overflow-hidden">
              <div className={cn("h-16", shade.className)} />
              <div className="p-3">
                <p className="font-medium">{shade.shade}</p>
                <code className="text-xs text-muted-foreground">{shade.variable}</code>
                <p className="text-xs mt-1 font-mono">{shade.className}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Secondary Shades</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {secondaryShades.map((shade) => (
            <div key={shade.shade} className="border rounded-lg overflow-hidden">
              <div className={cn("h-16", shade.className)} />
              <div className="p-3">
                <p className="font-medium">{shade.shade}</p>
                <code className="text-xs text-muted-foreground">{shade.variable}</code>
                <p className="text-xs mt-1 font-mono">{shade.className}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="border rounded-lg overflow-hidden">
              <div className={cn("h-16 flex items-center justify-center", color.className)}>
                <span className={color.name.includes("Foreground") ? "text-background" : ""}>
                  {color.name}
                </span>
              </div>
              <div className="p-3">
                <p className="font-medium">{color.name}</p>
                <code className="text-xs text-muted-foreground">{color.variable}</code>
                <p className="text-xs mt-1 font-mono">{color.className}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-muted rounded-md">
        <h3 className="text-sm font-medium mb-2">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Use <code className="text-xs">primary</code> for main actions, links, and key UI elements</li>
          <li>Use <code className="text-xs">secondary</code> for supporting elements and less emphasized actions</li>
          <li>Use semantic colors for their intended purposes to maintain consistency</li>
          <li>Ensure sufficient contrast between text and background colors</li>
          <li>Use color shades to create visual hierarchy and depth</li>
        </ul>
      </div>
    </div>
  );
}
