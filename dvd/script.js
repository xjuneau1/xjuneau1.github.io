import Logo from './logo.js'

const logo = new Logo(document.getElementById('logo'))

let lastTime

function update(time){
    if (lastTime != null){
        const delta = time - lastTime
        logo.update(delta)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)