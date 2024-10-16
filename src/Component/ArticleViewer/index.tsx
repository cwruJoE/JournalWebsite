import React, { useState, useEffect } from "react";

interface Keyword {
  id: string;
  text: string;
}

interface TextSection {
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
  articleId: string;
}

const ArticleViewer: React.FC<ArticleViewerProps> = ({ articleId }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await mockFetchArticle(articleId);
        setArticle(response);
      } catch (err) {
        setError("Failed to fetch article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>No article found</div>;

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
              />{" "}
              <p className="text-sm text-gray-600 mt-1">{section.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const mockFetchArticle = async (id: string): Promise<Article> => {
  const exampleArticle: Article = {
    id,
    title: "The Future of Artificial Intelligence in Healthcare",
    author: "Dr. Jane Smith",
    keywords: [
      { id: "1", text: "AI" },
      { id: "2", text: "Healthcare" },
      { id: "3", text: "Technology" },
    ],
    content: [
      {
        type: "text",
        content:
          "Artificial Intelligence (AI) is rapidly transforming the healthcare industry, offering unprecedented opportunities to improve patient care, streamline operations, and accelerate medical research. As we stand on the brink of a new era in medicine, it's crucial to understand the potential impact of AI on healthcare delivery and outcomes.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "AI-powered medical imaging analysis",
      },
      {
        type: "text",
        content:
          "One of the most promising applications of AI in healthcare is in medical imaging. Machine learning algorithms can analyze complex scans like MRIs, CT scans, and X-rays with remarkable accuracy, often detecting subtle abnormalities that human radiologists might miss. This not only improves diagnostic accuracy but also allows for earlier detection of diseases, potentially saving countless lives.",
      },
      {
        type: "text",
        content:
          "Another area where AI is making significant strides is in personalized medicine. By analyzing vast amounts of patient data, including genetic information, lifestyle factors, and treatment outcomes, AI can help doctors tailor treatment plans to individual patients. This approach has the potential to dramatically improve treatment efficacy and reduce adverse effects.",
      },
      {
        type: "image",
        url: "https://via.placeholder.com/150x100",
        caption: "AI-driven personalized treatment plans",
      },
      {
        type: "text",
        content:
          "However, the integration of AI in healthcare also raises important ethical and practical considerations. Issues such as data privacy, algorithm bias, and the changing role of healthcare professionals need to be carefully addressed as we move forward. It's essential that the development and deployment of AI in healthcare be guided by strong ethical principles and robust regulatory frameworks.",
      },
      {
        type: "text",
        content:
          "As we look to the future, it's clear that AI will play an increasingly important role in healthcare. From improving diagnostic accuracy to enabling personalized treatments, the potential benefits are enormous. However, realizing this potential will require ongoing collaboration between technologists, healthcare professionals, policymakers, and ethicists to ensure that AI is implemented in a way that truly benefits patients and society as a whole.",
      },
    ],
  };

  return exampleArticle;
};

export default ArticleViewer;
