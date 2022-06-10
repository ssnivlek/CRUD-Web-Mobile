function correctDate(date) {
	const checkDateList = new RegExp(/[0-9]{2,4}[/-]+[0-9]{1,2}[/-]+[0-9]{1,2}[T]+[A-Za-zÀ-ȕ0-9:.s]*/g);
	const checkDateForm = new RegExp(/[0-9]{2,4}[/-]+[0-9]{1,2}[/-]+[0-9]{1,2}/g);

	if (checkDateList.test(date)) {
		const splitDateTime = date.split("T");
		const splitDate = splitDateTime[0].split("-");
		const correctDateOrder = splitDate.reverse();
		const correctedDate = correctDateOrder.join("/");

		return correctedDate;
	} else if (checkDateForm.test(date)) {
		const splitDate = date.split("-");
		const correctDateOrder = splitDate.reverse();
		const correctedDate = correctDateOrder.join("/");

		return correctedDate;
	} else {
		return date;
	}
}

module.exports = {
	correctDate,
};
