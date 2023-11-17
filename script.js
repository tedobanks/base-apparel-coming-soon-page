const mediaQueryList = window.matchMedia('(min-width: 768px)')
const header = document.querySelector('#mobile-logo')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailInput = document.querySelector('#email')
const submit = document.querySelector('#submit')
const errorMsg = document.querySelector('#error-msg')

let validationState

emailInput.addEventListener('input', () => {
    const inputValue = emailInput.value
    if (emailRegex.test(inputValue)) {
        errorMsg.setAttribute('data-show', 'false')
        validationState = 'true'
    }
    else {
        errorMsg.setAttribute('data-show', 'true')
        validationState = 'false'
    }
})

submit.addEventListener('mouseover', () => {
    if (validationState == 'true') {
        submit.setAttribute('data-validated', validationState)
        console.log(submit)
    }
    else {
        submit.setAttribute('data-validated', 'false')
        console.log(submit)
    }
})


if (mediaQueryList.matches) {
    header.setAttribute('data-show', 'false')
} else {
    header.setAttribute('data-show', 'true')
}

mediaQueryList.addEventListener('change', () => {
    if (mediaQueryList.matches) {
        header.setAttribute('data-show', 'false')
    } else {
        header.setAttribute('data-show', 'true')
    }
})

