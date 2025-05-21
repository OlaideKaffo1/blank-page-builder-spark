
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function UsageGuidelines() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Implementation Guidelines</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Getting Started</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  To use this design system in your Lovable projects, follow these steps:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Import the necessary components from the UI library</li>
                  <li>Reference the color variables and typography classes from this guide</li>
                  <li>Follow the established patterns for layouts and component usage</li>
                  <li>Refer to this guide when making design decisions</li>
                </ol>
                <div className="bg-muted p-3 rounded-md mt-2">
                  <pre className="text-xs overflow-x-auto">
{`// Example import
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";`}
                  </pre>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>CSS Variables</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                The design system uses CSS variables for colors, which can be accessed in your custom components:
              </p>
              <div className="bg-muted p-3 rounded-md">
                <pre className="text-xs overflow-x-auto">
{`/* Accessing CSS variables in your styles */
.custom-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}`}
                </pre>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Always use the CSS variables rather than hardcoding color values to maintain consistency
                and enable theme switching.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Component Customization</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                You can customize components using the utility classes from Tailwind CSS:
              </p>
              <div className="bg-muted p-3 rounded-md">
                <pre className="text-xs overflow-x-auto">
{`// Customizing a button
<Button 
  variant="outline" 
  className="border-dashed hover:border-solid"
>
  Custom Button
</Button>

// Using the cn utility for conditional classes
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes", 
  condition && "conditional-classes"
)}>
  Content
</div>`}
                </pre>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                While customization is possible, try to stick to the design system as much as possible
                to maintain consistency across applications.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h4 className="font-medium mb-3">Do</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use consistent spacing and alignment throughout your UI</li>
              <li>Follow the established color scheme for semantic meaning</li>
              <li>Use appropriate component variants based on their intended purpose</li>
              <li>Ensure all interactive elements are accessible to keyboard and screen readers</li>
              <li>Maintain proper contrast ratios for text readability</li>
              <li>Use responsive design principles for all screen sizes</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h4 className="font-medium mb-3">Don't</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create new components when existing ones will work</li>
              <li>Use colors outside the defined color palette</li>
              <li>Override component styles in ways that break their behavior</li>
              <li>Use inconsistent spacing or layout patterns</li>
              <li>Mix different styling approaches (stick to the utility classes)</li>
              <li>Forget to test your UI on different devices and screen sizes</li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Accessibility Guidelines</h3>
        <div className="space-y-4">
          <p>
            Following these accessibility guidelines ensures our applications are usable by everyone:
          </p>
          
          <div className="space-y-3">
            <h4 className="font-medium">Color and Contrast</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Maintain minimum contrast ratio of 4.5:1 for normal text</li>
              <li>Don't rely solely on color to convey meaning</li>
              <li>Test your UI with color blindness simulators</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Keyboard Navigation</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Ensure all interactive elements can be accessed via keyboard</li>
              <li>Maintain logical tab order for form elements</li>
              <li>Provide visible focus indicators</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Screen Readers</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Use proper semantic HTML elements</li>
              <li>Add ARIA labels where necessary</li>
              <li>Test your UI with screen readers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
