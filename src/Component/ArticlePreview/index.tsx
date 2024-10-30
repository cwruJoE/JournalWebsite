import React from "react";
import { Article, TextSection } from "../ArticleViewer";

interface ArticlePreviewProps {
  article: Article;
  onClick?: (id: string) => void;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article, onClick }) => {
    const textSection = article.content.find(
        (section): section is TextSection => section.type === "text"
      );
      const abstract = textSection?.content || "";
      
      return (
        <article 
          className="max-w-3xl mx-auto cursor-pointer hover:bg-gray-50 font-marcellus mb-4"
          onClick={() => onClick?.(article.id)}
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            {article.title}
          </h2>
          <div className="mb-3 flex flex-wrap gap-2 pb-3 border-b border-black">
            {article.keywords.map((keyword) => (
              <span 
                key={keyword.id}
                className="bg-keyword-gray px-3 py-1 rounded-md text-xs text-gray-700"
              >
                {keyword.text}
              </span>
            ))}
          </div>
      
          <div className="text-gray-700 mb-3">
            {article.author}
          </div>
          <p className="text-gray-600 line-clamp-3">
            {abstract}
          </p>
        </article>
      );
    }

export default ArticlePreview;