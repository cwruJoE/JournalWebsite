import { useLocation } from "react-router-dom";
import ArticleViewer from "../../Component/ArticleViewer";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent";
import Layout from "../WorkingPaperPage/PageLayout";

const ArticlePage: React.FC = () => {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) return <div>Article not found</div>;

  return (
    <Layout>
      <Layout.MainSection>
        {article && <ArticleViewer article={article} />}
      </Layout.MainSection>
      <Layout.SideSection>
        <CurrentIssueComponent />
      </Layout.SideSection>
    </Layout>
  );
};

export default ArticlePage;
