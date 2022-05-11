document.getElementsByClassName('nav_thum')[0].style.display = 'inline-block';
document.getElementsByClassName('nav_thum')[0].style.width = '198px';
document.getElementsByClassName('nav_txt')[0].style.display = 'inline-block';
document.getElementsByClassName('nav_txt')[0].getElementsByTagName('dl')[0].style.display = 'inherit';
nav_view = document.getElementsByClassName('nav_viewer')[0].id = "nav_viewer";
function size_reset() {
    nav_width = nav_viewer.offsetWidth;
    document.getElementsByClassName('nav_txt')[0].style.width = (nav_width - 220) + "px";
    console.log(nav_width+'px');
}
size_reset();

//window.addEventListener('resize', size_reset());
new ResizeObserver(size_reset).observe(nav_viewer);