let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles =e.currentTarget.classList;
        if(styles.contains("decrease")){
            count-- 
        }
        else if (styles.contains("increase")){
            count++
        }
        else{
            count=0
        }
        if (count > 0){
            value.style.color = "rgb(41, 154, 54)"
        }
        else if(count < 0){
            value.style.color = "rgb(209, 11, 11)"
        }
        else{
            value.style.color = "rgb(199, 219, 72)"
        }
        value.textContent = count
    })
})

