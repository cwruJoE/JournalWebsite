import React from 'react';
import ArticlePreview from '../ArticlePreview';
import { Article } from '../ArticleViewer';
import { useNavigate } from 'react-router-dom';


interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const navigate = useNavigate();



  return (
    <div>
      {articles.map(article => (
        <ArticlePreview 
          key={article.id}
          article={article}
          onClick={(id) => navigate(`/articles/${id}`, { state: { article } })}
        />
      ))}
    </div>
  );
};

export default ArticleList;