let temp = true;
function slider (){
    if (temp){
        temp = false;
        document.getElementById('stylesheetLight').href='styleDark.css';
         
    }else {
        temp = true;
        document.getElementById('stylesheetLight').href='styleLight.css';
        let tool = document.getElementById('sliderD');
         tool.addEventListener('click', () => {
            tool.classList.toggle('tool');
          })
    }
   

}
let array =[];
let array2 = [];
let cur = 0;
let i = 0;
let k = 100;
let cur2 = 0;
let i2 = 0;
let k2 = 100;
    let scrl1 = document.getElementById('img1')
    let scrl2 = document.getElementById('img2')
    let scrl3 = document.getElementById('img3')
    let scrl4 = document.getElementById('img4')
    let scrl5 = document.getElementById('img5')
    let scrl6 = document.getElementById('img6')
    let timerI;
    let timerId;
    array.push  (scrl1);
    array.push  (scrl2);
    array.push  (scrl3);
    array2.push  (scrl4);
    array2.push  (scrl5);
    array2.push  (scrl6);
    let next;
    let prev;
    let next2;
    let prev2;

setInterval(() => {
    if (cur ==2){
        next = 0;
        prev = 2;
        cur = 0;
    }else{
        prev = +cur;
        next = +cur+1;
        cur+=1;
        
    }
   
        timerI = setInterval(() => {
        k--;
        array[prev].style.opacity = k/100 ;
        i=100-k;
        array[next].style.opacity = i/100 ;
        if(k <= 0||i>=100) clearInterval(timerI);
    }, 20);

    k=100;
    i=0;
}, 5000);

setInterval(() => {
    if (cur2 ==2){
        next2 = 0;
        prev2 = 2;
        cur2 = 0;
    }else{
        prev2 = +cur2;
        next2 = +cur2+1;
        cur2+=1;
        
    }
   
        timerId = setInterval(() => {
        k2--;
        array2[prev2].style.opacity = k2/100 ;
        i2=100-k2;
        array2[next].style.opacity = i2/100 ;
        if(k2 <= 0||i2>=100) clearInterval(timerId);
    }, 20);

    k2=100;
    i2=0;
}, 5000);
    


    
