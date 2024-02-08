import React, { useCallback, useEffect, useState } from 'react';
import { useLongDateTimeFormat } from '../../hooks/general';
import styles from './WeatherWidget.module.scss';
import cloud from '../../../assets/weather_snow_sun.svg';

import DaysWeather from '../../atoms/days-weather/DaysWeather';

const WeatherWidget = () => {
    const { date } = useLongDateTimeFormat(new Date());
    


	return (
		<div className={styles['weather-cont']}>
			<div className={styles['heading']}>
				<p>{date}</p>
			</div>
			<div className={styles['current-weather']}>
				<p>
					<span>17</span>
					<span>London, Uk</span>
				</p>
				<img src={cloud} alt="cloud" />
			</div>
            <div className={styles['days']}>
                <DaysWeather />
            </div>
		</div>
	);
};

export default WeatherWidget;
