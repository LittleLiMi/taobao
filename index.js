window.onload = function(){

	var oDiv = document.getElementById('banner');
	var oImg = oDiv.getElementsByTagName('img')[0];
	var oUl = document.getElementById('scroll');
	var aLi = oUl.getElementsByTagName('li');
	var play = null;
	var num = 0;

	var arrImg = ['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg',
				'images/banner4.jpg','images/banner5.jpg','images/banner6.jpg',
				'images/banner7.jpg','images/banner8.jpg'];

	for (var i = 0; i < arrImg.length; i++) {
		oUl.innerHTML += '<li></li>';
	}

	function fnTab(){
	 	for (var i = 0; i < aLi.length; i++){
	 		aLi[i].className = '';
	 	}
	 	aLi[num].className = 'active';	 	
	 	oImg.src = arrImg[num];	 	
	 	aLi[num].className = 'active';
	 }
	 fnTab();
	 function start(){	//开始自动播放
		play=setInterval(function(){
			num++;
			if(num==arrImg.length){num=0;}
			fnTab();
		},2000);
	}
	start();


}; 