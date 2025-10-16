import ReactMarkdown from "react-markdown";

interface TextWithMarkdownProps {
  children: string;
  className?: string;
  key?: number;
}

export default function TextWithMarkdown({
  children,
  className = "",
  key,
}: TextWithMarkdownProps) {
  return (
    <ReactMarkdown
      key={key}
      className={className}
      components={{
        p: ({ children }) => <span>{children}</span>,
        em: ({ children }) => (
          <em className="italic font-medium">{children}</em>
        ),
        strong: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
