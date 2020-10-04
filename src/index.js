module.exports = function toReadable(number) {

    const numbersLessNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ['hundred'];

    let numStr = number.toString();

    if (number > 99) {
        if (number % 100 === 0) {
            return `${numbersLessNineteen[numStr.charAt(0)]} ${hundred}`;
        } else {
            let reminderOfDivision = number % 100;
            let temp
            if (reminderOfDivision <= 19) {
                temp = numbersLessNineteen[reminderOfDivision];
            } else {
                temp = (reminderOfDivision % 10 === 0) ? dozen[numStr.charAt(1)] : `${dozen[numStr.charAt(1)]} ${numbersLessNineteen[numStr.charAt(2)]}`;
            }
            return `${numbersLessNineteen[numStr.charAt(0)]} ${hundred} ${temp}`;
        }
    } else if (number > 19 && number < 100) {
        return (number % 10 === 0) ? dozen[numStr.charAt(0)] : `${dozen[numStr.charAt(0)]} ${numbersLessNineteen[numStr.charAt(1)]}`;
    } else {
        return numbersLessNineteen[number];
    }
}
