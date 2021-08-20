
window.onload=function(){

	imageBackground();
	showDropDown();
	showBurgerMenu();
	changeAnimation();
};
function imageBackground(){
	let imageBackground=document.getElementsByClassName('ibg');

	if(imageBackground.length>0){
		for(let index=0;index<imageBackground.length;index++){
			let src=imageBackground[index].getElementsByTagName('img')[0].getAttribute('src');
			imageBackground[index].style.cssText='background: url("'+src+'");background-repeat: no-repeat;'+
			'background-position: center;-webkit-background-size: cover;-o-background-size: cover;-moz-background-size: cover;'

			imageBackground[index].getElementsByTagName('img')[0].style.display = 'none';
		}
	}
}

function showDropDown(){

	let dropDownHeader=document.getElementsByClassName('custom-select__header')[0];
	let customSelect=document.getElementsByClassName('form__custom-select')[0];
	let originalSelect=document.getElementsByClassName('form__original-select')[0];
	let selectItems=document.getElementsByClassName('custom-select__item');

	dropDownHeader.onclick=function(){
		customSelect.classList.toggle('custom-select_active');
	};

	for(let index=0;index<selectItems.length;index++){
		selectItems[index].onclick=function(){
			let value=this.innerText;
			document.getElementsByClassName('custom-select__current')[0].innerText=value;
			originalSelect.selectedIndex=index;
			customSelect.classList.remove('custom-select_active');
		};
	}
}

function showBurgerMenu(){

	let burgerIcon=document.getElementsByClassName('header__burger-icon')[0];
	if(burgerIcon){
		burgerIcon.onclick=function(){
			burgerIcon.classList.toggle("header__burger-icon_active");
			document.getElementsByClassName("header__event")[0].classList.toggle("header__event_active");
			document.body.classList.toggle("_lock");
		};
	}
}

function changeAnimation(){
	let mainTitle=document.getElementsByClassName('mainblock__title')[0];
	let span=mainTitle.getElementsByTagName('span');
		
	span[span.length-1].onanimationend=function(){
		mainTitle.classList.remove("mainblock__title_animation_show");
		mainTitle.classList.add('mainblock__title_animation_hide');
		this.onanimationend=function(){
			mainTitle.classList.remove('mainblock__title_animation_hide');
			mainTitle.classList.add("mainblock__title_animation_show");
			changeAnimation();
		};
	};
}