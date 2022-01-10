	/**- langkah 1 seleksi target -**/
			const tombol = document.querySelector('#tbl');
		const boxMenu = document.querySelector('#menu');	

	/**- lagkah ke-2 membuat function tekan -**/
const tekan = () => { 
boxMenu.classList.toggle('slide');
tombol.classList.toggle("active");
} 		


document.addEventListener('click',function(e){
	
	/**- langkah ke-3 membuat logika click -**/	    
    	if(e.target.id !='tbl' && e.target.id !='menu'){					
					boxMenu.classList.remove('slide');
					tombol.classList.remove('active');						
  }
	/**-
lagkah ke-4 menempelkan function tekan di html 
	 -**/
})

