/***- animasi login -***/
/**- tombol login di klik-**/
document.querySelector('.masuk').onclick = () =>{
 document.querySelector('#login').style.left='0%';
				 document.querySelector('#register').style.left='-100%';
				
document.querySelector('.overlay-tombol').style.left='50%';
document.querySelector('.overlay-tombol').style.background='#13b7e6';

document.querySelector('.box-contact').classList.add('active');
document.querySelector('.box-contact').style.border="3px solid #13b7e6";
document.querySelector('.box-contact h2').innerHTML="SILAHKAN LOGIN";   
}

/**- tombol register di klik-**/
document.querySelector('.daftar').onclick =()=>{
document.querySelector('#login').style.left='100%';

document.querySelector('#register').style.left='0%';

document.querySelector('.overlay-tombol').style.left='16%';
document.querySelector('.overlay-tombol').style.background='#224089';

document.querySelector('.box-contact').classList.remove('active');   	
document.querySelector('.box-contact').style.border="3px solid #224089";			
document.querySelector('.box-contact h2').innerHTML="selamat datang";
  
  if(window.innerWidth > 576) {
document.querySelector('.overlay-tombol').style.left='32.58%';				
		 }
  }				
