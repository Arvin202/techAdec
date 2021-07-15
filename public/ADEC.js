//scroll animation
$('.nav-links a').on('click',function(e){
  if(this.hash != ''){
    e.preventDefault();
    const hash= this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    },800);
  }
});

//contact form
let name = document.getElementById('yourName');
let email = document.getElementById('yourEmail');
let phone = document.getElementById('yourPn');
let message = document.getElementById('message');

const contactForm = document.querySelector('.form');
contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open('POST','/');
  xhr.setRequestHeader('content-type','application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email sent');
      name.value='';
      email.value='';
      phone.value='';
      message.value='';
    }else{
      alert('something went wrong')
    }
  }
  xhr.send(JSON.stringify(formData));
})
