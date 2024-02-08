export const useLongDateTimeFormat = (date: Date) => {
	const currentDate = new Date(date);
	const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDayAndDate = currentDate.toLocaleDateString('en-US', options);
	return { date: formattedDayAndDate };
};
