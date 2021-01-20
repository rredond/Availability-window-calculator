const inputs = document.querySelectorAll(".inputs");

const day1 = document.getElementById('Day 1');
const startDay = document.querySelector('.start-day');
const endDay = document.querySelector('.end-day');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');

const closeModal = document.getElementById('close-modal');
const modalContainer = document.querySelector('.modal-container');

const displayDay1 = document.querySelector('.display-day1');
const displayStartDate = document.querySelector('.display-start-date');
const displayEndDate = document.querySelector('.display-end-date');
const formContainer = document.querySelector('.container');

let checkResult ;


// Funtions
function addcl(){
	let parent = this.parentElement;
    parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentElement;
	if(this.value == ""){
        parent.classList.remove("focus");
	}
}

function error(input, message){
    const inputDiv = input.parentElement;
    inputDiv.classList.add('error');
    const small = inputDiv.querySelector('small');
    small.innerText = message;
    return 0
}
function success(input){
    const inputDiv = input.parentElement;
    inputDiv.classList.remove('error');
    return 1
}



function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            error(input, `${input.id} is required`);
            checkResult = false
        }else{
            success(input);
            checkResult = true;
        }
    }
    )
    return checkResult;

}


// Event Listeners


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let availabilityStartInt = parseInt(startDay.value);
    let availabilityEndInt = parseInt(endDay.value);
    let selected = dayjs(day1.value);
    
    availabilityEnd = selected.add(availabilityEndInt-1, 'day');
    availabilityStart = selected.add(availabilityStartInt-1, 'day');

        checkRequired([day1, startDay, endDay]);
        console.log(checkResult);

    if(checkResult){
        modalContainer.classList.remove('hide');
        console.log('Hello')
        displayDay1.innerHTML = `<span>Day 1 </span>: ${selected.format('DD-MMM-YYYY')}`;
        displayStartDate.innerHTML = `Availability start date (<span> Day: ${availabilityStartInt} </span>): ${availabilityStart.format('DD-MMM-YYYY')}`;
        displayEndDate.innerHTML = `Availability end date (<span> Day: ${availabilityEndInt} </span>): ${availabilityEnd.format('DD-MMM-YYYY')}`;
    }else {
        console.log('ropt')
    }


})

btn2.addEventListener('click', (e)=>{
	modalContainer.classList.add('hide');
})


