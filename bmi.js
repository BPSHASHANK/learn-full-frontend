const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height===''||height<0||isNaN(height)){
        results.innerHTML='please give valid height'
        
    } else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML="please enter valid data"
    }else{
    const bmi=(weight/((height*height)/1000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
    }

    })