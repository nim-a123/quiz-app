let timer_shower = document.getElementById('timer_shower');
let timeline_line = document.getElementById('timeline_line');
let question_exam = document.getElementById('question_exam');
let first_q = document.getElementById('first_q');
let last_q = document.getElementById('last_q');
let question_number_Shower = document.getElementById('question_number_Shower');

let box_start = document.getElementById('box_start')
let main_Box = document.getElementById('main_Box')

let btn_1 = document.getElementById('btn_1');
let btn_2 = document.getElementById('btn_2');
let btn_3 = document.getElementById('btn_3');
let btn_4 = document.getElementById('btn_4');

let secsaeeat = document.getElementById('secsaeeat');
let minsaeeat = document.getElementById('minsaeeat')

let darsad = 0 ;

let darsad_abi = 0 ;

let gulac_number = document.getElementById('gulac_number');
let point_first = document.getElementById('point_first');
let point_sec = document.getElementById('point_sec');
let ans_1 = document.getElementById('ans_1');
let ans_2 = document.getElementById('ans_2');
let ans_3 = document.getElementById('ans_3');

let time = 14;
let time_interval ;

let line_interval ;

let asnwer_holder = '';
let random_keeper = '';
let question_peeker = '';

let secend = 0 ;
let minut = 0;

let total_question = '';

let tiemline_width = 100;

let question_1 = [1,'What country has the highest life expectancy',0,'Hong Kong','China','USA','Duby'];
let question_2 = [2,'What is the most common surname in the United States?',1,'jack','Smith','albert ','sona'];
let question_3 = [3,'Who was the Ancient Greek God of the Sun?',0,'Apollo','marpolo','greek king','john'];
let question_4 = [4,'What year was the United Nations established?',3,'1939','1975',' 1937','1945'];
let question_5 = [5,'What artist has the most streams on Spotify?',2,'6nine9','travis scott',' Drake','shakira'];
let question_6 = [6,'How many minutes are in a full week? ',1,'10,000','10,080',' 10,100','99,999'];
let question_7 = [7,'What sports car company manufactures the 911? ',0,'Porsche','honda',' bugatti','kia'];

let question_all = [question_1, question_2, question_3, question_4,question_5,question_6,question_7];

let lastbox = document.getElementById('lastbox')

let question_lvl = 0;

let win = 0;
let loss = 0;
let late = 0;
let shower_asnwer_loss = '';
let shower_asnwer_win = '';

let helper = document.getElementById('helper');
let helper1 = document.getElementById('helper1');

random_number()

let shuffled = btn_array.reduce(
    ([a, b]) => (b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]),
    [[...btn_array], []]
  )[1];



function start(){

    random_number()
    box_start.classList.add('hidden')
    main_Box.classList.remove('hidden')
    total_question = question_all.length;
    time_interval =   setInterval(time_handeler,1000);
    first_q.innerHTML = question_peeker[0];
    last_q.innerHTML = total_question;
    question_number_Shower.innerHTML =  question_peeker[0] +'.';
    question_exam.innerHTML = question_peeker[1];
    
    btn_1.innerHTML = '1.' + " " +question_peeker[3];
    btn_2.innerHTML = '2.' + " " +question_peeker[4];
    btn_3.innerHTML = '3.' + " " +question_peeker[5];
    btn_4.innerHTML ='4.' + " " +question_peeker[6];
   
    line_interval =   setInterval(timeline_handeler,37.5)

}

function submit(){
  
    last_question()
    if(asnwer_holder === ''){
        return false
    }
   
if(asnwer_holder === question_peeker[2]){
    win+=1
    question_lvl += 1;
    shower_asnwer_win += question_peeker[1] + '<br>';
    helper1.innerHTML = shower_asnwer_win;
    resster()
    start() 
   
}else{
    loss+=1
    question_lvl += 1;
    shower_asnwer_loss += question_peeker[1] + '<br>';
    helper.innerHTML = shower_asnwer_loss;
    resster()
    start()
}
}

function click_1(){
    asnwer_holder = 0 ;
}
function click_2(){
    asnwer_holder = 1 ;
}
function click_3(){
    asnwer_holder = 2 ;
}
function click_4(){
    asnwer_holder = 3 ;
}


function time_handeler(){
    timer_shower.innerHTML = time;
time -= 1;

if(time === -1 ){
    clearInterval(time_interval)
    late +=1
    loss+=1
    question_lvl += 1;

   
    resster()
    start()
}
if(question_lvl === total_question ){
    main_Box.classList.add('hidden')
    end_exam()
    clearInterval(time_interval)
    time = 0 ;

}

secend +=1 ;
if(secend === 60){
    secend = 0;
    minut += 1 ;

}


}


function timeline_handeler(){

    tiemline_width-= 0.25;

    timeline_line.style.width = tiemline_width + '%';

    if(tiemline_width === 0 ){
        clearInterval(line_interval)
    }
    if(question_lvl === total_question ){
        clearInterval(line_interval)
        tiemline_width = 100
        

    }

}


function random_number(){

    random_keeper = question_lvl;

    question_peeker = question_all[random_keeper];

}



function resster(){
    clearInterval(time_interval);
    clearInterval(line_interval);
    time = 14;
    tiemline_width = 100;
    asnwer_holder = '';
}



function last_question(){
    
    new_end = total_question - 1 ;

if(question_lvl === new_end){
    secsaeeat.innerHTML = minut;
    minsaeeat.innerHTML = secend;

    main_Box.classList.add('anim_boxmain')
   
    setTimeout(() => {
        main_Box.classList.add('hidden')
        end_exam()
        
      
    }, 1500);

}

}




function end_exam(){
    circel_refler()

    lastbox.classList.remove('hidden')

    ans_1.innerHTML = win;
    ans_2.innerHTML = late;
    ans_3.innerHTML = loss;

    point_sec.innerHTML = total_question;
    point_first.innerHTML = win;


}




function circel_refler(){
  
    darsad = win / total_question ;
    darsad*= 100;
    darsad *= 2;

    darsad_abi = Math.floor(darsad)  / 2 ;

    gulac_number.innerHTML = darsad_abi ;

    if(darsad === 200){
        darsad = 201;
    }

    document.body.style.cssText = "--percent: " + darsad;
}
