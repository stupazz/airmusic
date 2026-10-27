document.querySelectorAll('.vid[data-yt]').forEach(v=>{
 const id=v.dataset.yt,box=v.querySelector('.box');
 box.style.background='#1b1b1b url(https://i.ytimg.com/vi/'+id+'/hqdefault.jpg) center/cover';
 box.style.cursor='pointer';
 box.addEventListener('click',()=>{
  box.style.background='none';
  box.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1" title="video" allow="autoplay; encrypted-media; fullscreen" allowfullscreen style="width:100%;height:100%;border:0"></iframe>';
 },{once:true});
});
