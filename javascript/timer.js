function timer(){
    let count = 0;
       
    const timer1 = setInterval(() => {
        console.log(count);
        count++

        if(count >= 10){
        clearInterval(timer1)
    }
    },1000)

}
timer()
