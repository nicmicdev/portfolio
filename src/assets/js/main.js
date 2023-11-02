// SHOW MOBILE MENU

function showMenu() {
    document.getElementById('nav-links').classList.add('mobile-menu');
    document.getElementById('menu-icn').classList.add('d-none');
    document.getElementById('close-icn').classList.remove('d-none');
}


//HIDE MOBILE MENU

function hideMenu() {
    document.getElementById('nav-links').classList.remove('mobile-menu');
    document.getElementById('menu-icn').classList.remove('d-none');
    document.getElementById('close-icn').classList.add('d-none');
}

//FILTER FUNTIONS FOR PROJECT SECTION

function showProjects() {
    document.getElementById('irecu').classList.add('d-none');
    document.getElementById('join').classList.remove('d-none');
    document.getElementById('epl').classList.remove('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('portfolio').classList.remove('d-none');
    document.getElementById('comingsoon').classList.remove('d-none');
    document.getElementById('eatflix').classList.remove('d-none');



    console.log('!!!!show projects!!!');
    
}

function showClient() {
    document.getElementById('irecu').classList.remove('d-none');
    document.getElementById('join').classList.add('d-none');
    document.getElementById('comingsoon').classList.add('d-none');
    document.getElementById('epl').classList.add('d-none');
    document.getElementById('pokedex').classList.add('d-none');
    document.getElementById('portfolio').classList.add('d-none');
    document.getElementById('eatflix').classList.add('d-none');
    

    console.log('!!!!show client work!!!');
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }