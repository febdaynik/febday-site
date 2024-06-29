import React, { useState, useEffect } from 'react';

export default function WatchComponent() {
	const [time, setTime] = useState(new Date());

	// Update the time every second
	useEffect(() => {
		const interval = setInterval(() => {
		setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const weekDays = [
		'Вс',
		'Пн',
		'Вт',
		'Ср',
		'Чт',
		'Пт',
		'Сб'
	];

	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	]

	const day = time.getDate();
	const weekDay = weekDays[time.getDay()];
	const month = months[time.getMonth()];
	const hours = time.getHours() < 10 ? '0'+time.getHours() : time.getHours();
	const minutes = time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes();

	return (
		<div className="clock-block">
			{/* Сюда бы сделать красивую вёрстку календаря и уведомлений там каких-то */}
			<span className="hover-header">{`${weekDay}, ${day} ${month} ${hours}:${minutes}`}</span>
		</div>
	)
}
