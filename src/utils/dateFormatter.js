const MONTHS = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dez",
}

const dateFormatter = function dateFormatter(date) {
    const year = date.substr(0, 4);
    const month = MONTHS[date.substr(5, 2)];
    return `${month} ${year}`
}

export default dateFormatter;