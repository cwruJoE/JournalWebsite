import { useNavigate } from "react-router-dom";
import { exampleArticles } from "../HomePage";
import Layout from "../WorkingPaperPage/PageLayout";
import ArticlePreview from "../../Component/ArticlePreview";
import CurrentIssueComponent from "../../Component/CurrentIssueComponent";

const ArticlesPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Layout.MainSection>
        <h2 className="font-marcellus font-normal text-[48px] border-b border-black mb-10">
          Recent Articles
        </h2>
        <div>
          {exampleArticles.map((article) => (
            <ArticlePreview
              key={article.id}
              article={article}
              onClick={(id) =>
                navigate(`/articles/${id}`, { state: { article } })
              }
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
