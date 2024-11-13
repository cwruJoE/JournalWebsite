import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../Component/ArticleViewer';

export interface ArticlesState {
  articles: Article[];
  currentArticle: Article | null;
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchArticlesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchArticlesSuccess(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchArticlesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const {
  fetchArticlesStart,
  fetchArticlesSuccess,
  fetchArticlesFailure,
} = articlesSlice.actions;

export default articlesSlice.reducer;

export const selectAllArticles = (state: { articles: ArticlesState }) => state.articles.articles;
export const selectArticlesLoading = (state: { articles: ArticlesState }) => state.articles.loading;
export const selectArticlesError = (state: { articles: ArticlesState }) => state.articles.error;