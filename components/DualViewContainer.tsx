'use client';

interface DualViewContainerProps {
  humanContent: React.ReactNode;
  codeContent: React.ReactNode;
}

export default function DualViewContainer({ humanContent, codeContent }: DualViewContainerProps) {
  // For static export, both views are rendered and JavaScript handles the toggle
  // Start with human view visible, JS will hide it to show code view first
  return (
    <>
      {/* Human version - visible to Google, hidden by JS for humans */}
      <div className="block" id="human-view">
        {humanContent}
      </div>
      
      {/* Code version - visible to humans by default */}
      <div className="hidden" id="code-view">
        {codeContent}
      </div>
    </>
  );
}