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
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.articleData]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.articleData]);

	return (
		<div className={styles['latest_news-cont']}>
			<div className={styles['heading']}>
				<p>Latest News</p>
			</div>

            {state?.articleData ?
			<div className={styles['description']}>
				{state?.articleData?.map((item: ArticleData, index: number) => {
                    return (
                        <div className={styles['box']} key={index}>
							<img src={item.urlToImage} alt="news" />
							<p className={styles['desc']}  data-toggle="tooltip" data-placement="top" title={item?.title}>{item?.title}</p>
							<p className={styles['time']}>1 Hour ago</p>
						</div>
					);
				})}
                </div>
                : <p>No Data Found</p>
            }
          
            <div className={styles['loader']} >

			{state.loadingNews && <p>Loading .... </p>}
            </div>
		</div>
	);
};

export default LatestNews;
