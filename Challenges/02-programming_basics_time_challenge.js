const solution = (totalMinutes) => {
  let hour = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  if (hour < 10) {
     hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

 return `${hour}:${minutes}`;
};
  export default solution;
