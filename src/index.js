const inputDay = document.querySelector('#dd'),
inputMonth = document.querySelector('#month'),
inputYear = document.querySelector('#year')

const dayRegex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/
const monthRegex = /^(0?[1-9]|1[0-2])$/
const yearRegex = /^\d{4}$/





const divIcon = document.querySelector('.icon')
divIcon.addEventListener('click', ()=>{
    validateInput()
})

function validateInput(){

    const day = inputDay.value
    const month = inputMonth.value
    const year = inputYear.value

    const errorDay = document.querySelector('.erro-day')
    const titleDay = document.querySelector('.error-text-day')

    if(!dayRegex.test(day)){

        errorDay.classList.remove('opacity-0')
        inputDay.classList.remove('border-neutral-off-white')
        inputDay.classList.add('border-primary-light-red')
        titleDay.classList.remove('text-neutral-smoke-grey')
        titleDay.classList.add('text-primary-light-red')

        setTimeout(()=>{
            errorDay.classList.add('opacity-0')
            inputDay.classList.remove('border-primary-light-red')
            inputDay.classList.add('border-neutral-off-white')
            titleDay.classList.remove('text-primary-light-red')
            titleDay.classList.add('text-neutral-smoke-grey')
        }, 2000)
    }


    if(!monthRegex.test(month)){
        
    }
    
    
}