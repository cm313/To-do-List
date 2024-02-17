const todoList = [];
function resultFun(){
    const val = document.querySelector('.js-addValue');
    const inputVal = val.value;
    const date = document.querySelector('.js-addDate');
    const inputDate = date.value;
     todoList.push({
        inputVal, //shorthand property if property name and variable name same.
        inputDate
     });
     renderHTML();
     val.value = '';
     date.value = '';
}

  function renderHTML(){
    let inputRenderHTML = '';
    for(let i = 0; i < todoList.length; i++){
      const todoObj = todoList[i];
      const{inputVal, inputDate} = todoObj;
      html = `
        <div>${inputVal} </div>
        <div>${inputDate}</div>
        <button class="del-button" onclick = "todoList.splice(${i}, 1);
        renderHTML();
        "> Delete </button> 
        `;
       inputRenderHTML += html;
    }
   document.querySelector('.js-displayTag').innerHTML = inputRenderHTML;
  
  }

function onkeydownfun(event){
        if(event.key === 'Enter'){
            resultFun();
        }
    }