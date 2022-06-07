function correctDate(date) {
	const checkDate = new RegExp(/[0-9]{2,4}[/-]+[0-9]{1,2}[/-]+[0-9]{1,2}[T]+[A-Za-zÀ-ȕ0-9:.s]*/g);
	if (checkDate.test(date)) {
		const splitDateTime = date.split("T");
		const splitDate = splitDateTime[0].split("-");
		const correctDateOrder = splitDate.reverse();
		const correctedDate = correctDateOrder.join("/");
		console.log(correctedDate);
		return correctedDate;
	} else {
		return date;
	}
}

module.exports = {
	correctDate,
};
