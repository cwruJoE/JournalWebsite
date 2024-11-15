import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ArticleViewer from "../../Component/ArticleViewer";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent";
import Layout from "./PageLayout";
import { selectAllArticles } from "../../store/slices/articleSlice";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articles = useSelector(selectAllArticles);
  const article = articles.find(article => article.id === id);

  if (!article) return <div>Article not found</div>;

  return (
    <Layout>
      <Layout.MainSection>
        <ArticleViewer article={article} />
      </Layout.MainSection>
      <Layout.SideSection>
        <CurrentIssueComponent />
      </Layout.SideSection>
    </Layout>
  );
};

export default ArticlePage;