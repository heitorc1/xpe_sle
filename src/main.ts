import './style.css'
import main from './main.html?raw'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = main
