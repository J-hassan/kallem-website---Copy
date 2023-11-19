
let bars = document.getElementById('bars')
let close = document.getElementById('close')
let menu = document.getElementById('mb-menu')
let btns = document.querySelectorAll('.mobile-menu ul li a')
console.log(btns)


bars.onclick = function(){
    menu.style.right = '0'
}
close.onclick = function(){
    menu.style.right = '-100%'
}

btns.forEach((e)=>{
    e.onclick = function(){
        menu.style.right = '-100%'
    }
})


