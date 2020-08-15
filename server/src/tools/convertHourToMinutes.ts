export default function convertHourToMinutes(time: string){
    const [hour, minutes] = time.split(':').map(Number);

    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}

/**or you could write
function convertHourToMinutes(time){
    const array= time.split(':').map(Number);
    hour = array[0];
    minutes = array[1];
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}
console.log(convertHourToMinutes('1:30'))
 */