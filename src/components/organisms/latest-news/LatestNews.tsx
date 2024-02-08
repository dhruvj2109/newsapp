import React, { useCallback, useContext, useEffect } from 'react';
import styles from './LatestNews.module.scss';
import { ArticleData } from '../../utils/interface/Article';
import NewsContext from '../../../store/NewsContext';

const LatestNews = () => {
	const { state, dispatch } = useContext(NewsContext);

	const handleScroll = useCallback(() => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		if (scrollTop + clientHeight >= scrollHeight) {
			dispatch({ type: 'ARTICLE_PAGE_NUMBER', payload: state.articleActivePage + 1 });
		}
	}, [state.articleData]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [state.articleData]);

	return (
		<div className={styles['latest_news-cont']}>
			<div className={styles['heading']}>
				<p>Latest News</p>
			</div>

			<div className={styles['description']}>
				{state?.articleData?.map((item: ArticleData, index: number) => {
					return (
						<div className={styles['box']} key={index}>
							<img src={item.urlToImage} alt="image" />
							<p className={styles['desc']}>{item?.title}</p>
							<p className={styles['time']}>1 Hour ago</p>
						</div>
					);
				})}
			</div>
			{state.loadingNews && <p>Loading .... </p>}
		</div>
	);
};

export default LatestNews;
