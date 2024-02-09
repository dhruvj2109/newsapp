import { Reducer, useCallback, useEffect, useMemo, useReducer } from 'react';
import NewsContext, { INewsAction, INewsState, defaultNewsState } from './NewsContext';
import axios from 'axios';

const NewsProvider = (props: any) => {
	const newsReducer = useCallback((state: INewsState, action: INewsAction) => {
		switch (action.type) {
			case 'ARTICLE_DATA':
				if (state.articleData && state.articleData?.length > 0) return { ...state, articleData: [...state?.articleData, ...action.payload] };
				return { ...state, articleData: action.payload };
			case 'ARTICLE_PAGE_NUMBER':
				return { ...state, articleActivePage: action.payload };
			case 'LOADING_NEWS':
				return { ...state, loadingNews: action.payload };
			case 'NEWS_TOTAL_COUNT':
				return { ...state, newsTotalCount: action.payload };
			default:
				break;
		}
		return state;
	}, []);

	const initReducer = useCallback(() => defaultNewsState, []);
	const url = useMemo(() => {
		return { newsUrl: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8dbfc93635434e19bd682249796bcefc', weatherUrl: '' };
	}, []);

	// const weatherApi = useCallback(async () => {
	// 	// const response = await axios.get('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=Delhi&lon=INDIA&appid=e3d194000019fd67c6b089100de1574b');
	// }, []);

	// useEffect(() => {
	// 	weatherApi();
	// }, []);

	const [newsState, dispatchNewsAction] = useReducer<Reducer<INewsState, INewsAction>, INewsState>(newsReducer, defaultNewsState, initReducer);

	const apiData = useCallback(async () => {
		const queryParams = {
			country: 'us',
			category: 'business',
			apiKey: '8dbfc93635434e19bd682249796bcefc',
			page: newsState.articleActivePage,
			pageSize: 10
		};
		if (!newsState.articleData || newsState.newsTotalCount > newsState.articleData?.length) {
			dispatchNewsAction({ type: 'LOADING_NEWS', payload: true });
			try {
				const response = await axios.get(url.newsUrl, { params: queryParams });
				dispatchNewsAction({ type: 'NEWS_TOTAL_COUNT', payload: response.data.totalResults });
				dispatchNewsAction({ type: 'ARTICLE_DATA', payload: response?.data.articles });
			} catch (error) {
				console.log('error ', error);
			} finally {
				dispatchNewsAction({ type: 'LOADING_NEWS', payload: false });
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newsState.articleActivePage]);

	useEffect(() => {
		apiData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newsState.articleActivePage]);

	return <NewsContext.Provider value={{ state: newsState, dispatch: dispatchNewsAction }}>{props.children}</NewsContext.Provider>;
};

export default NewsProvider;
