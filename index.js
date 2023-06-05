const labels = document.querySelectorAll('.form-control label')

labels.forEach( label => {
    label.innerHtml = label.innerText
        .split('')
        .map((letter, idx) => ``)
})
