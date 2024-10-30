import React from "react";

interface Keyword {
  id: string;
  text: string;
}

export interface TextSection {
  type: "text";
  content: string;
}

interface ImageSection {
  type: "image";
  url: string;
  caption: string;
}

type ContentSection = TextSection | ImageSection;

export interface Article {
  id: string;
  title: string;
  author: string;
  keywords: Keyword[];
  content: ContentSection[];
}

interface ArticleViewerProps {
  article: Article;
}

const ArticleViewer: React.FC<ArticleViewerProps> = ({ article }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-marcellus">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="text-sm mb-4">
        <span>{article.author}</span>
        {article.keywords.map((keyword) => (
          <span key={keyword.id} className="ml-2 bg-gray-200 px-2 py-1 rounded">
            {keyword.text}
          </span>
        ))}
      </div>
      {article.content.map((section, index) => (
        <div key={index} className="mb-4">
          {section.type === "text" && <p>{section.content}</p>}
          {section.type === "image" && (
            <div className="mb-2">
              <img
                src={section.url}
                alt={section.caption}
                style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}
              />
              <p className="text-sm text-gray-600 mt-1">{section.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleViewer;