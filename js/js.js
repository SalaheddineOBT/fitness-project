var s=document.querySelectorAll('section');
onscroll=function(){
var scrollps=document.documentElement.scrollTop;
s.forEach((section)=>{
if(scrollps>=section.offsetTop - section.offsetHeight *0.25 && scrollps<section.offsetTop + section.offsetHeight - section.offsetHeight *0.25){
var ccr=section.attributes.id.value;
removeAllActiveClasses();
addActiveClass(ccr);
}
});
};
function removeAllActiveClasses(){
document.querySelectorAll(".navBar a").forEach((rl)=>{
rl.classList.remove("active");
});
};
function addActiveClass(id){
var select=".navBar a[href='#"+id+"']";
document.querySelector(select).classList.add('active');
};
/*$('section').each(function(){
			let top =$(window).scrollTop();
			let height=$(this).height();
			let offset=$(this).offset().top - 200;
			let id=$(this).attr('id');
			
			if(top >= offset && top < offset + height){
				$('.navBar ul li a').removeClass('active');
				$('.navBar').find('[href="#$(id)"]').addClass('active');
			}
		});*/
  

	