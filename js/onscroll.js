window.onscroll = () =>{
	
let awan            = document.querySelector('.awan');
let matahari        = document.querySelector('.matahari');
let car             = document.querySelector('.car');
let h1              = document.querySelector('.container2 #judul');
let container1      = document.querySelector('.container1');
let aboutJudul      = document.querySelector('.container-about .box-judul');
let gambarAbout     = document.querySelector('.container-about .box-data .img img');
let boxBesarAbout   = document.querySelector('.container-about .box-data .box-besar');  
let boxTombol       = document.querySelector('.tombol-menu');


const wpy      = window.pageYOffset;  
   
   awan.style.width    = wpy * 0.3   + 100  +'%';
   matahari.style.top  = wpy * 0.09  + 5  +'%';  
   car.style.top       = wpy * 0.1   + 65  +'%';
        
  if(window.innerWidth < 576 && window.scrollY >0  ){   
   car.style.width  = wpy * 1 + 100 +'px';
   car.style.height = wpy * 1 + 100 +'px';
   car.style.top    = wpy * 0.1  + 65  +'%';   
    }
     
     if(window.innerWidth < 576 && window.scrollY > 50){
     container1.classList.add('active');
    				                   
     }else if(window.innerWidth < 576 && window.scrollY > 30){
     car.style.width  = wpy * 1 + 150 +'px';
     car.style.height = wpy * 1 + 150 +'px';
     h1.classList.add("slide");
     container1.classList.remove('active');
     	         
 }else{/**- else ini dari if yg pertama -**/
   car.style.width  = wpy * 1   + 40 +'px';
   car.style.height = wpy * 1   + 40 +'px';
   car.style.top    = wpy * 0.1 + 65 +'%' ; 
   h1.classList.remove("slide");
   /*container1.classList.remove('pindah');*/ 
   container1.classList.remove('active');
   } 
 
 
 if(window.innerWidth < 576 &&  window.scrollY > 210){
  boxBesarAbout.classList.add('slideLeft');  
 }else{ 	 	
  boxBesarAbout.classList.remove('slideLeft');			
 }
 
 
if(window.innerWidth < 576 &&  window.scrollY > 215){	
 gambarAbout.classList.add('geserGambar');   
 }else{ 
 gambarAbout.classList.remove('geserGambar');
 	}

	let galeriimgImg   = document.querySelectorAll('.container-galeri .galeri-img .box-img');
for(let i=0; i<galeriimgImg.length; i++)
if(window.innerWidth < 576 && window.scrollY > 750 || window.innerWidth > 768 && window.scrollY > 100 ){	
				setTimeout(function(){			
	galeriimgImg[i].classList.add('landing')	;
				},500 *(i+1));
 }
} 
