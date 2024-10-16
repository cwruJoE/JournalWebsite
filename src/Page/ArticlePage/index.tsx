import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../WorkingPaperPage/PageLayout';
import ArticleViewer from '../../Component/ArticleViewer';
import CurrentIssueComponent from '../../Component/CurrentIssueComponent';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout>
      <Layout.MainSection>
        {id && <ArticleViewer articleId={id} />}
      </Layout.MainSection>
      <Layout.SideSection>
                <div className="mx-auto mt-8">
                    <CurrentIssueComponent/>
                </div>
            </Layout.SideSection>
    </Layout>
  );
};

export default ArticlePage;