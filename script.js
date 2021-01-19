function updateClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  sum = (hours * 3600) + (minutes * 60) + seconds;
  result = 86400 - sum;
  document.getElementById("insert-time").innerHTML = result;
}
