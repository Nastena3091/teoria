// setTimeout(() => {
//     console.log("hello")
// }, 5000);
let j=0;
let i= setInterval(
    tik,2000);
function tik(){
    console.log("tik");
    j++;
    if (j==5){
        clearInterval(i);
    }
}
setTimeout(function tick() {
    console.log('тік');
    setTimeout(tick, 2000); // (*)
  }, 2000);