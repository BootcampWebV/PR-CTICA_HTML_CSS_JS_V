
var elementosNav = document.getElementsByClassName("elemento");

for( var i=0; i< elementosNav.length; i++){
elementosNav[i].addEventListener("click", function(event){
    var goTo = this.getElementsByTagName("a")[0].href.split('#');

    deleteActiveClass();
    this.classList.add('elemento_active');

    if(goTo.length === 2){
        event.preventDefault();
        var sectionToGo = goTo[goTo.length - 1];
       var elementToGo = getElementToScroll(sectionToGo);
      
    scrollToElement(elementToGo);
    }
});
}

function deleteActiveClass(){
for( var i=0; i< elementosNav.length; i++){
    elementosNav[i].classList.remove('elemento_active');
}
}

/*smoot scroll*/

function getElementToScroll(id){
    var elem;
    if ( id === ''){
        elem = document.getElementsByClassName('hero')[0];
    }else{
        elem = document.getElementById(id);
    }
    return elem;
   
}


function scrollToElement(element){

    var jump = parseInt(element.getBoundingClientRect().top * 0.4);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;


    if (!element.lastJump || element.lastJump > Math.abs(jump)){
        element.lastJump = Math.abs(jump);
    setTimeout(function(){
        scrollToElement(element);
    }, 40);
} else{
   element.lastJump = null; 
}

}

/* estilo en los botones*/

var acumuladorOffset = function (element){
    var top = 0;

    do {
  top += element.offsetTop || 0;
  element = element.offsetParent;

    } while(element);

    return top;
}

var sobreMiOffset =  acumuladorOffset( document.getElementById('sobre_mi'));
var formacionOffset = acumuladorOffset( document.getElementById('formacion'));
var profesionalOffset = acumuladorOffset( document.getElementById('profesiones'));
var contactoOffset = acumuladorOffset( document.getElementById('contacto'));


window.addEventListener("scroll", changeMenuStyle);

var previous;

function changeMenuStyle(event){
   
    var pageOffset = window.pageYOffset;

    if(pageOffset >= 0 && pageOffset < sobreMiOffset){ 
        
        if(!previous || previous !==1){
             previous=1;
        }else{
            return false;
        }
       
    deleteActiveClass();
    document.querySelector("a[href='#']").parentNode.classList.add("elemento_active");

    } else if(pageOffset >= sobreMiOffset && pageOffset < formacionOffset){
        if(!previous || previous !==2){
            previous=2;
       }else{
           return false;
       }
        deleteActiveClass();
        document.querySelector("a[href$='#sobre_mi']").parentNode.classList.add("elemento_active");

    }else if(pageOffset >= formacionOffset && pageOffset < profesionalOffset){
        if(!previous || previous !==3){
            previous=3;
       }else{
           return false;
       }


        deleteActiveClass();
        document.querySelector("a[href$='#formacion']").parentNode.classList.add("elemento_active");
    }else if(pageOffset >= profesionalOffset && pageOffset < contactoOffset){
        if(!previous || previous !==4){
            previous=4;
       }else{
           return false;
       }
        deleteActiveClass();
        document.querySelector("a[href$='#profesiones']").parentNode.classList.add("elemento_active");
    } else if(pageOffset >= contactoOffset && profesionalOffset < contactoOffset){//hay que revisar aqui!!!
        if(!previous || previous !==5){
            previous=5;
       }else{
           return false;
       }
        deleteActiveClass();
        document.querySelector("a[href$='#contacto']").parentNode.classList.add("elemento_active");
    }
    

}



