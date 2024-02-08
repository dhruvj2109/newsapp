import style from './App.module.scss';
import Header from './components/organisms/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/news/News';
import Portal from './pages/portal/Portal';
import Footer from './components/organisms/footer/Footer';
import NewsProvider from './store/NewsProvider';
function App() {
	return (
		<NewsProvider>
			<BrowserRouter>
				<div className={style['App']}>
					<Header />
					<Routes>
						<Route path="/" element={<News />} />
						<Route path="/portal" element={<Portal />}></Route>
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</NewsProvider>
	);
}

export default App;
