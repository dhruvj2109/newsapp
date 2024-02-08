import React from 'react';
import { ArticleData } from '../components/utils/interface/Article';
import articles from '../json/Article.json';
type INewsActionType = 'ARTICLE_DATA' | 'ARTICLE_PAGE_NUMBER' | 'LOADING_NEWS' | 'NEWS_TOTAL_COUNT';

export type INewsState = {
	articleData: any; //ArticleData[];
	weatherData: any;
	articleActivePage: number;
	loadingNews: boolean;
	newsTotalCount: number;
};

export type INewsAction = {
	type: INewsActionType;
	payload: any;
};
export const defaultNewsState: INewsState = {
	articleData: articles.articles,
	weatherData: [],
	articleActivePage: 1,
	loadingNews: false,
	newsTotalCount: 10
};

export type INewsContext = {
	state: INewsState;
	dispatch: React.Dispatch<INewsAction>;
};

export const defaultNewsContext = {
	state: defaultNewsState,
	dispatch: (item: INewsAction) => {}
};
const NewsContext = React.createContext(defaultNewsContext);

export default NewsContext;
