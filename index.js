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
 /*I PREVIOUSLY HAD EVERYTHING COMMENTED OUT IN THE FUNCTION BUT WHEN 
 I STOPPED WORKING I TRIED CONTACTING THE ai FOR SOLUTIONS SO THATS WHAT I HAVE ABOVE AND 
 ABOVE CODE WORKS IN THE CONLSE I BE RECIEVEING THE SUCCESS IN THE LOGS BUT I HAVE NEVER RECIEVED AN EMAIL
 AS WELL AS WHEN I DID HAVE EVERYTHING FROM THE VIDEO I THE FUNCTION I NEVER RECIEVED AN EMAIL 
 AND IT WOULD LOAD CORRECTLY BUT I WOULD GET ERRORS LIKE 412 OR PREREQUISTES DONT MATCH AND OF SORTS
 SO IF YOU RUN THIS CODE AND IT WORKS JUST KNOW THIS SPECIFIC CODE WOULD WORK
 FOR ME TO BUT I STILL DONT GET EMAILS SO MAYBE IT IS EMAIL js THAT IS BUGGED 

*/
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
