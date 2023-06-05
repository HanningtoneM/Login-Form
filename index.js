const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.innerHtml = label.innerText
        .split('')
        .map((letter, idx) => `<span 
        style="transiton-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
