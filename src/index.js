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

    const errorDay = document.querySelector('.error-day')
    const titleDay = document.querySelector('.error-text-day')

    const errorMonth = document.querySelector('.error-month')
    const titleMonth = document.querySelector('error-text-month')
    
    const divDetailDay = document.querySelector('.detail-days')
    

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

        return day

    }

    if(!monthRegex.test(month)){

        

        return month
    }
    console.log(day)
    
}


function calcularIdade(dataNascimento) {
    const dataAtual = new Date()
    const nascimento = new Date(dataNascimento)
  
    // Calcula a diferença em milissegundos entre as datas
    const diferenca = dataAtual - nascimento
    
    // Converte a diferença em anos, meses e dias
    const idade = {}
    idade.anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25))
    idade.meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
    idade.dias = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24))
  
    return idade
  }
  
  // Exemplo de uso
  const dataNascimento = "1992-04-12";
  const idade = calcularIdade(dataNascimento);
  
