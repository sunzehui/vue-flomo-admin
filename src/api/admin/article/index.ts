import { defHttp } from '/@/utils/http/axios';
enum Api {
  articleList = '/article/list',
  article = '/article/',
}

export const getArticleList = (params) =>
  defHttp.get<API.ArticleList>({
    url: Api.articleList,
    params,
  });
export const deleteArticle = (id: string) =>
  defHttp.delete<API.ArticleList>({
    url: Api.article + id,
  });
export const articleDetail = (id: string) =>
  defHttp.get<API.ArticleDetailResult>({
    url: Api.article + id,
  });
