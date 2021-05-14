const button = document.querySelector('.ripple');

button.addEventListener('click', function(e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonleft = e.target.offsetLeft

    const finalXcorrd = x - buttonleft
    const finalYcorrd = y - buttonTop

    const span = document.createElement('span')
    span.classList.add('circle')
    span.style.top = finalYcorrd + 'px';
    span.style.left = finalXcorrd + 'px';

    this.appendChild(span)

    setTimeout(() => {
        span.remove()
    }, 500)
})