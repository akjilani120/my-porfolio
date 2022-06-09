
   $(document).ready(function(){
    $("#example").typer({
      strings: [
        "Junior Full Stack Web Developer",
        "Junior Full stack MERN Developer",
        
      ],
      typeSpeed: 150,
      backspaceSpeed: 50,
      backspaceDelay: 500,
      repeatDelay: 1000,
      repeat: true,
      autoStart: true,
      startDelay: 100,
    });
  
    AOS.init({
      duration: 3000, 
      delay: 0, 
     
      offset: 200,
      anchorPlacement: 'top-center'
     })
     var map = new GMaps({
      el: '#map',
      lat: 23.684994,
      lng: 90.356331
    });
  });
 
  