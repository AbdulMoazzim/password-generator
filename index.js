class password {
    strongPassword(passlength) {
        this.pass = ''
        this.length = passlength
        this.alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.num = '1234567890'
        this.special = '!@#$%^&*()'
        for (let i = 0; i<this.length; i+=3) {
            if (this.length - i == 2) {
                this.pass += this.alp[Math.floor(Math.random()*this.alp.length)]
                this.pass += this.num[Math.floor(Math.random()*this.num.length)]
            }
            else if (this.length - i == 1) {
                this.pass += this.alp[Math.floor(Math.random()*this.alp.length)]
            }
            else {
                this.pass += this.alp[Math.floor(Math.random()*this.alp.length)]
                this.pass += this.num[Math.floor(Math.random()*this.num.length)]
                this.pass += this.special[Math.floor(Math.random()*this.special.length)]
            } 
        } return this.pass
    }
    weakPassword(passlength) {
        this.pass = ''
        this.length = passlength
        this.alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i<this.length; i++) {
            this.pass += this.alp[Math.floor(Math.random()*this.alp.length)]
        } 
        return this.pass
    }
}
function genPassword() {
    let num = document.querySelector('.number').value
    if (num == '') {
        let elem1 = document.querySelector('.password')
        let para = document.createElement('p')
        para.className = 'condition'
        para.innerHTML = "You should give password's length"
        elem1.appendChild(para)
        setTimeout(()=>{
            para.parentNode.removeChild(para)
            return
        },500)
        
    }
    num = Number.parseInt(num)
    let myValue = document.getElementsByName('radio')
    for(let i =0; i<myValue.length; i++) {
        if (myValue[i].checked) {
            var radioValue = myValue[i].value
            if (radioValue == 'strong') {
                let generator = new password()
                document.querySelector('.pass').value = generator.strongPassword(num)
             }
            else {
                let generator = new password()
                console.log(generator.weakPassword(num))
                document.querySelector('.pass').value = generator.weakPassword(num)
             }
        }
    }
}
document.querySelector('.btn').onclick = genPassword


document.querySelector('.copy').onclick = function() {
    let elem2 = document.querySelector('.text')
    let elem3 = document.querySelector('.textDiv')
    let copy = document.querySelector('.pass').value
    let newInput = document.createElement('input')
    elem2.appendChild(newInput)
    newInput.value = copy
    newInput.select()
    document.execCommand('copy')
    newInput.parentNode.removeChild(newInput)
    let copyMessage = document.createElement('span')
    copyMessage.innerHTML = 'copied to clipboard!'
    elem3.appendChild(copyMessage)
    setTimeout(()=>{
        copyMessage.parentNode.removeChild(copyMessage)
    },500)
}