 const grabnumbtn = document.querySelectorAll('.numbtn');
 const grabsubmit = document.querySelector('.submitbtn');
 const grabthankyou = document.querySelector('.submain');
 const grabrating = document.querySelector('#rating_result')
 const grabmain = document.querySelector('.main')

 grabsubmit.addEventListener('click', response)

 function response() {
    grabthankyou.classList.toggle('active')
    grabmain.classList.toggle('deactive')
 }

// grabnumbtn.forEach((number) => {
//     number.addEventListener('click', function() {
//         // grabrating.innerHTML = `you selected ${number.value} out of 5`
//         grabrating.innerHTML = 'you selected ' + number.value + ' out of 5'
//     })
// })

grabnumbtn.forEach(rate);

function rate(numbers) {
    numbers.addEventListener('click', thenumber)

    function thenumber() {
        grabrating.innerHTML = 'you selected ' + numbers.value + ' out of 5'
    }
}


// TRYING TO USE THE FOR LOOP BUT NOT WORKING PERFECTLY
// for (let index = 0; index < grabnumbtn.length; index++) {
//     const number = grabnumbtn[index];
//     grabrating.innerHTML = 'you selected ' + number.value + ' out of 5'
// }


