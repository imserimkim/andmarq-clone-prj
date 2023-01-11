$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header > div',head);            //콜백 함수 실행 $('header').load('./inc.html header ',head);
$('footer').load('./inc.html footer ');

let idx = localStorage.idx || 0 ; 

function head(){

    
    $('header .menu li').eq(idx).find('a').addClass('active');    //분산시에는 data-num으로 숫자값 지정하기 
    $('header .menu li').click(function(){
        let idx = $(this).data().num;
        console.log(idx)
        localStorage.idx=idx; 
    })

}

// index.js
fetch('./data.json')
        .then(function(res){ return res.json() })
        .then(function(images){                        //res 와 gallery는 매개변수로 변할 수
            let b=images.artist;
            b.sort(() => Math.random() - 0.2);   // 배열을 만들어서 랜덤으로 돌리기 (sort는 -1, 1, 0으로 값을 비교 )
            console.log(b)
            init(b)
            
        });                                             //데이터 가져오는 역할

    function init(artist){
    let aa='';
    const elImg = document.querySelectorAll('.artist-image > li  div');
    // randomImg = Math.ceil(Math.random()*15);

    artist.forEach(function(value,key){
        aa = `<a href=${artist[key].detail}>
        <img src=${artist[key].url}>
        <h2>${artist[key].name}</h2>
        </a>`;
        elImg[key].innerHTML = aa;
    })
}                                                     //일처리하는 역할