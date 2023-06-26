const inputDay = document.querySelector('#dd'),
inputMonth = document.querySelector('#month'),
inputYear = document.querySelector('#year')

const dayRegex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/
const monthRegex = /^(0?[1-9]|1[0-2])$/
const yearRegex = /^\d{4}$/





const divIcon = document.querySelector('.icon')
divIcon.addEventListener('click', () => {
  validateInput()
})

function validateInput() {
  const day = inputDay.value
  const month = inputMonth.value
  const year = inputYear.value

  let isValid = true

  if (!validateDay(day)) {
    isValid = false
  }

  if (!validateMonth(month)) {
    isValid = false
  }

  if(!validateYear(year)){
    isValid = false
  }

  if (!isValid) {
    return
  }

  const dataNascimento = `${year}-${month}-${day}`

  console.log(dataNascimento)
  
  
  const idade = calcularIdade(dataNascimento)

  console.log(idade.anos, idade.meses, idade.dias)
  
  const detailYear = document.querySelector('.detail-years')
  detailYear.innerHTML = ''

  createResult(idade.anos, detailYear)

  const detailMonths = document.querySelector('.detail-months')
  detailMonths.innerHTML = ''

  createResult(idade.meses, detailMonths)

  const detailDays = document.querySelector('.detail-days')
  detailDays.innerHTML = ''

  createResult(idade.dias, detailDays)

}

function validateDay(day) {
  const errorDay = document.querySelector('.error-day')
  const titleDay = document.querySelector('.error-text-day')

  if (!dayRegex.test(day)) {
    errorDay.classList.remove('opacity-0')
    inputDay.classList.remove('border-neutral-off-white')
    inputDay.classList.add('border-primary-light-red')
    titleDay.classList.remove('text-neutral-smoke-grey')
    titleDay.classList.add('text-primary-light-red')

    setTimeout(() => {
      errorDay.classList.add('opacity-0')
      inputDay.classList.remove('border-primary-light-red')
      inputDay.classList.add('border-neutral-off-white')
      titleDay.classList.remove('text-primary-light-red')
      titleDay.classList.add('text-neutral-smoke-grey')
    }, 2000)

    return false
  }

  return true
}

function validateMonth(month) {
  const errorMonth = document.querySelector('.error-month')
  const titleMonth = document.querySelector('.error-text-month')

  if (!monthRegex.test(month)) {
    errorMonth.classList.remove('opacity-0')
    inputMonth.classList.remove('border-neutral-off-white')
    inputMonth.classList.add('border-primary-light-red')
    titleMonth.classList.remove('text-neutral-smoke-grey')
    titleMonth.classList.add('text-primary-light-red')

    setTimeout(() => {
      errorMonth.classList.add('opacity-0')
      inputMonth.classList.remove('border-primary-light-red')
      inputMonth.classList.add('border-neutral-off-white')
      titleMonth.classList.remove('text-primary-light-red')
      titleMonth.classList.add('text-neutral-smoke-grey')
    }, 2000)

    return false
  }

  return true
}

function validateYear(year){

    const errorYear = document.querySelector('.error-year')
    const titleYear = document.querySelector('.error-text-year')

    if(!yearRegex.test(year)){
        
        errorYear.classList.remove('opacity-0')
        inputYear.classList.remove('border-neutral-off-white')
        inputYear.classList.add('border-primary-light-red')
        titleYear.classList.remove('text-neutral-smoke-grey')
        titleYear.classList.add('text-primary-light-red')
    
        setTimeout(() => {
        errorYear.classList.add('opacity-0')
          inputYear.classList.remove('border-primary-light-red')
          inputYear.classList.add('border-neutral-off-white')
          titleYear.classList.remove('text-primary-light-red')
          titleYear.classList.add('text-neutral-smoke-grey')
        }, 2000)
    
        return false

    }

    return true
}

function createResult(text, parentChild){

    const h2 = document.createElement('h2')
    h2.textContent = text
    h2.classList.add('text-primary-purple')
    h2.classList.add('text-5xl')
    h2.classList.add('font-extrabold')

    parentChild.appendChild(h2)
}


function calcularIdade(dataNascimento) {
    const dataAtual = new Date()
    const nascimento = new Date(dataNascimento)
  
    // Calcula a diferença em milissegundos entre as datas
    const diferenca = dataAtual - nascimento
  
    // Converte a diferença em anos, meses e dias
    const idade = {}
    idade.anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25))

    const mesesRestantes = (diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))
    
    idade.meses = Math.floor(mesesRestantes)
    idade.dias = Math.floor((mesesRestantes % 1) * (365.25 / 12))
  
    return idade
}
