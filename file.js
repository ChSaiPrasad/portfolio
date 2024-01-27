const form = document.getElementById('form');
const fullname=document.getElementById("fullname");
const email=document.getElementById('email');
const msg=document.getElementById('message');
const nameError=document.getElementById('namerror');
const mailError=document.getElementById('mailerror');
const phonenum=document.getElementById('phone');
var isformValid;
var inputs=[fullname,email,msg];
let shouldValidate = false;

//function validate(){
    // let fullnameValue = fullname.value.trim()
    // let emailValue = email.value.trim()
    // let msgValue = msg.value.trim()

    // if(fullnameValue===''){
    //     setError(fullname,'Full name cannot be empty')
    // }
//     else if(fullnameValue.length<3){
//         setError(fullname,'Full name should be minimum 3 characters')
//     }
//     else{        
//         setSuccesss(fullname)
//     }
//     //email check
//     if(emailValue===''){
//         setError(email,'Email cannot be empty')
//     }  
//     else if(!emailCheck(emailValue)){
//         setError(email,'Enter Valid Email address')
//     }
//     else{        
//         setSuccesss(email)
//     }

//     //Messsage check

//     if(msgValue===''){
//         setError(msg,'Message cannot be empty')
//     }
//     else if(msgValue.length<6){
//         setError(msg,'Message should be minimum 6 characters')
//     }
//     else{        
//         setSuccesss(msg)
//     }

//     function setError(input,message){
//         isformValid = false;
//      if (input=='fullname'){
//         nameError.innerText = message
//      }
//      else{
//         mailError.innerText = message
//      }
//     }
//     function setSuccesss(input){
//         isformValid = true;
//         let parent = input.parentElement;
//         parent.classList.add('success')
//         parent.classList.remove('error')
//     }


//     function emailCheck(input){
//         let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//         let valid = emailReg.test(input)       
//         return valid
//     }

//     function phoneCheck(input){
//         const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//         return re.test(String(input).toLowerCase());
//     }

//     console.log(isformValid)
//     return isformValid;
// }

// const reset = inputs=>{
//     inputs.forEach(i=>{
//         i.value="";
//         let parent = i.parentElement;
//         parent.classList.remove('success')
//     })
// }



form.addEventListener('submit', e =>{
    e.preventDefault();
    shouldValidate = false;
    if(true){
        var body = 'Name: '+fullname.value + '<br/> Email: ' +email.value + '<br/> Phonenumber: '+phonenum.value
        + '<br/> Message: '+msg.value;
        var sub = fullname.value +"'s message from portfolio contact form!";

        Email.send({
            // Host : "smtp.elasticemail.com",
            // Username : "jamisaiteja666@gmail.com",
            // Password : "46207ED15A8729E402E72B0AC7093DEB1AD1",
            SecureToken:"2fc7e0a6-ca58-49c5-aa43-a875963e656d",
            To : 'saiprasadc137@gmail.com',
            From : email.value,
            Subject : sub,
            Body : body
        }).then(
            message => alert("Message Sent Successfully to Ch Sai Prasad")
        )
        // reset(inputs);
    }
})

