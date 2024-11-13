import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArticlePreview from "../../Component/ArticlePreview";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent";
import { selectAllArticles } from "../../store/slices/articleSlice";
import Layout from "./PageLayout";

const ArticlesPage = () => {
  const navigate = useNavigate();
  const articles = useSelector(selectAllArticles);
  
  return (
    <Layout>
      <Layout.MainSection>
        <h2 className="font-marcellus font-normal text-[48px] border-b border-black mb-10">
          Recent Articles
        </h2>
        <div>
          {articles.map((article) => (
            <ArticlePreview
              key={article.id}
              article={article}
              onClick={(id) => navigate(`/articles/${id}`)}
            />
          ))}
        </div>
      </Layout.MainSection>
      <Layout.SideSection>
        <CurrentIssueComponent />
      </Layout.SideSection>
    </Layout>
  );
};

export default ArticlesPage;