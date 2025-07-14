// template_19ibfsf
// service_3jsm6xu
// yXl6r0m8BDfViRVZl

function contact(event) {
  event.preventDefault();

//   const loading = document.querySelector(" .modal__overlay--loading");
//   const success = document.querySelector(" .modal__overlay--success");
//   loading.classList += " modal__overlay--visible";

  emailjs.sendForm("service_8w7tgna","template_zh4wsjj",event.target,"p_k6wgxj-cOpGXZDU")
    .then((result) => {
        console.log('success',result.text);
    }, (error) => { 
        console.log('error', error);
    });
}


    //   loading.classList.remove("modal__overlay--visible");
    //   success.classList += " modal__overlay--visible";
    // })
    // .catch(() => {
    //   loading.classList.remove("modal__overlay--visible");
    //   alert(
    //     "the email service is temporialirily unavialibe. Please contact me directly on JHardyit@yahoo.com "
    //   );
    // });
// }
