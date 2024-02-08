import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import logout from '../../../assets/logout 1.svg';
import search from '../../../assets/Union.svg';

const Header = () => {
	const location = useLocation();

	return (
		<div className={styles['header-cont']}>
			<div className={styles['header-buttons']}>
				<Link to="/" relative="path">
					<button className={location.pathname === '/' ? styles['active'] : styles['inactive']}>News</button>
				</Link>
				<Link to="/portal" relative="path">
					<button className={location.pathname === '/portal' ? styles['active'] : styles['inactive']}>Portal</button>
				</Link>
			</div>
			<div className={styles['icons']}>
				<img src={search} alt="search" />
				<img src={logout} alt="logout" />
			</div>
		</div>
	);
};

export default Header;
