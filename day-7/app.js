
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const date = document.getElementById('date');
const state = document.getElementById('state');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');

// console.log(username,email,date,state,city,phone)

form.addEventListener('submit', e => {
	e.preventDefault();
   
    validations();
    
});

function validations(){
    // console.log('ji')

    const usernameValue = username.value.trim();
    const statevalue=state.value;
    const cityvalue=city.value;
    const emailValue = email.value.trim();
    const phonevalue=phone.value.trim()
    const datevalue=date.value.trim();


    // console.log(statevalue,cityvalue)


    if(usernameValue === ''){
        setError(username,'user cannot be blank')
    }
    else{
        setSuccess(username,'user was not blank')
    }
    if(statevalue == "NONE"){
        setError(state,'state cannot be none')

    }
    else{
        setSuccess(state,'state value was there')
    }
    if(cityvalue == "NONE"){
        setError(city,'city cannot be none')

    }
    else{
        setSuccess(city,'city value was there')
    }
    if(emailValue === '') {
		setError(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setError(email, 'Not a valid email');
	}
    else{
        setSuccess(email,'email was valid')
    }

    if(datevalue === '') {
        setError(date, 'date cannot be blank');
	} else if (!isdate(datevalue)) {
        setError(date, 'date not coreect format');
	}
    else{
        setSuccess(date ,"date is in correct format")
    }

    if(phonevalue===''){
        setError(phone, 'phone cannot be blank');
    }else if(!isPhone(phonevalue)){
        setError(phone, 'Not a valid phone number');

    }
    else{
        setSuccess(phone,'valid phone number')
    }

    const options=document.getElementsByName('gender')

    if(!(options[0].checked || options[1].checked)){
        setError(gender, 'gender cannot be blank');
    }
    else{
        setSuccess(gender,'good person')
    }

}
function setError(input, message) {
    const formControl = input.parentElement;
	const small = formControl.querySelector('small')
	small.className = 'error';
	small.innerText = message;
}
function setSuccess(input,message) {
	const formControl = input.parentElement;
    const small = formControl.querySelector('small')
	small.className = 'success';
	small.innerText = message;
}
function isEmail(email) {
	return /^[a-zA-Z0-9_.-]+@[a-zA-Z]+|(\.[a-zA-Z]+\.[a-zA-Z]+)|'com'/ .test(email);
}
function isPhone(phonevalue){
    return /[6-9]{1}[0-9]{9}/.test(phonevalue)
}
function isdate(datevalue){
    return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(datevalue)
}
 