// hamburgerBtn Start
  const hamburgerBtn = document.querySelector('.hamburger');
  const navBar = document.querySelector('.nav-bar');
 
 hamburgerBtn.addEventListener('click',()=>{
     navBar.classList.toggle("active")
  })
    
 // hamburgerBtn End

  //tab Start

let tabs = document.querySelectorAll('.tabs_toggle'),
content = document.querySelectorAll(".tabs_content");

tabs.forEach((tab,index)=>{
tab.addEventListener('click',()=>{
    content.forEach(content=>{
        content.classList.remove('is-active')
    });
    tabs.forEach(tab=>{
        tab.classList.remove('is-active')
    })
    content[index].classList.add('is-active');
    tabs[index].classList.add('is-active');
})
})

//tab End

// form field 

let regForm = document.getElementById('formId');
let regEmail = document.getElementById('regemail');
let regName = document.getElementById('regname');
let regMobile = document.getElementById('regmobile');


regForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    Validate();
})

function Validate(){
    // getting values from input 
    let regEmailValue = regEmail.value.trim();
    let regNameValue = regName.value.trim();
    let regMobileValue = regMobile.value.trim();

    let flag = 0;

    
     
     

  // email validation 
  if(regEmailValue === ''){
    setErrorFor(regEmail,'Email cannot be blank');
    flag++;
  }
  else if(!isEmail(regEmailValue))
  {
    setErrorFor(regEmail,'Enter a valid email');
    flag++;
  }
  else{
    setSuccessFor(regEmail);
  }

  // name validation
  if(regNameValue === ''){
    setErrorFor(regName,'Name cannot be blank');
    flag++;
  }
  
  else if(!isName(regNameValue))
  {
    setErrorFor(regName,'Enter a valid Name');
    flag++;
  }
  else{
    setSuccessFor(regName);
  }

  // Mobile validation
  if(regMobileValue === ''){
    setErrorFor(regMobile,'Mobile cannot be blank');
    flag++;
  }
  else if(!isMobile(regMobileValue))
  {
    setErrorFor(regMobile,'Enter a valid mobile number');
    flag++;
  }
  else{
    setSuccessFor(regMobile);
  }
}

//----------------------------- Error Function   -------------------------- //
function setErrorFor(input,message){
    const formFloating = input.parentElement;
    const small = formFloating.querySelector('small');
    small.innerText = message;
    formFloating.className ='form-group error';
  }
  //----------------------------- Error Function   -------------------------- //
  
  //----------------------------- success Function-------------------------- //
  function setSuccessFor(input){
    const formFloating = input.parentElement;
    formFloating.className='form-group success';
  }
  //----------------------------- success Function-------------------------- //
  
  //----------------------------- email validation using regX-------------------------- //
  function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
  
  
  
    // ^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$
    // /^[a-zA-z]{3,15}@[a-z]{4,6}\.[a-z]{3,4}([.a-z]{2,3})?$/
  }
  //----------------------------- email validation using regX-------------------------- //
  
  function isName(nameN){
    return /^[A-Z a-z _-]{3,15}$/.test(nameN);
  }
  function isMobile(mobileN){
    return /^[6-9]\d{9}$/.test(mobileN);
  }

  function getSelectValue(){
    let select = document.getElementById('selectbox');
    let dogBreed = document.getElementById('dogBreed');
    let catBreed = document.getElementById('catBreed');
    
    if(select.value === "cat"){
      dogBreed.classList.add("breed_section")
      catBreed.classList.remove('breed_section')
    }else{
      dogBreed.classList.remove("breed_section")
      catBreed.classList.add('breed_section')
    }
  }