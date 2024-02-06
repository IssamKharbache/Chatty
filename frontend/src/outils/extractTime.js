export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours} : ${minutes}`;


}

//function to pad single-digit numbers that start with 0 

function padZero(number){
    return number.toString().padStart(2,"0");
}