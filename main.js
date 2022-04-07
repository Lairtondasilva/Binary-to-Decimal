const binario = document.querySelector(".binario")
const btn = document.querySelector(".btn")
const lbl = document.querySelector(".container label")
const container = document.querySelector(".container")
const result = document.querySelector(".result")
const alerta = document.createElement("p")

alerta.textContent = "Caractere inválido"
alerta.style.color = "red"
alerta.style.fontSize = "12px"
alerta.style.display = "none"
alerta.setAttribute("class","alert")
binario.insertAdjacentElement("afterend",alerta)

binario.addEventListener("input",(e)=>{
  e.target.value = e.target.value.replace(/([^01])/g,(a,b)=>{
    binario.style.borderColor = "red"
    container.querySelector(".alert").style.display= "inline"
    setTimeout(()=>{
      binario.style.borderColor = "black"
      container.querySelector(".alert").style.display = "none"
    },1000)
    return ""
  })
})

btn.addEventListener('click',()=>{
  result.textContent = "Resultado: "+conversor(binario.value)})

let str = "Lairton"
function conversor(value){
  let result = 0;
  let j = 0;
  for(let i=value.length-1;i>=0;i--){
    result += parseInt(value[i])*2**j
    j++
  }
  return result
}
