
function toggleTheme(){
  document.body.classList.toggle('dark-mode');
  try{ localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light'); }catch(e){}
}
window.addEventListener('DOMContentLoaded', ()=>{
  try{
    if(localStorage.getItem('theme')==='dark'){ document.body.classList.add('dark-mode'); }
  }catch(e){}
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
});
