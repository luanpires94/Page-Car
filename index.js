function handleMenu(){
    if (document.getElementById('menu').style.display === 'flex'){
        document.getElementById('menu').style.display = 'none'
        document.getElementById('menu-hamburger').style.display = 'flex'
        document.getElementById('close-hamburger').style.display = 'none'
    }
    else{
        document.getElementById('menu').style.display = 'flex'
        document.getElementById('menu-hamburger').style.display = 'none'
        document.getElementById('close-hamburger').style.display = 'flex'
    }
}