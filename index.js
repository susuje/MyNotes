const plusBtn = document.querySelector('.plusBtn');
const form = document.querySelector('form');
let count =0;
plusBtn.addEventListener('click',()=>{
    form.classList.toggle('on');
    count++;
    if(count % 2 !==0){
        plusBtn.textContent = '=';
        ul.style.setProperty('height','35vh');

    }
    else {
        plusBtn.textContent = '+';
        ul.style.setProperty('height','65vh');
    }
})
///////////////////////////////////////////

const inputTitle =  document.querySelector('input');
const textarea = document.querySelector('.txt');
const ul = document.querySelector('ul');
const saveBtn = document.querySelector('.saveBtn');


let todos = [];

const saveLocal = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
};

const delTodo = (e) => {
    const target = e.target.parentElement;
    todos = todos.filter((todo)=>todo.id !== parseInt(target.id));
    saveLocal();
    target.remove();
};

const paintTodo = (todo) => {
    if(todo.text !=='' && todo.title !==''){const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const btn = document.createElement('button');
    const p = document.createElement('p');

    h4.textContent = todo.title;
    p.textContent = todo.text;
    btn.classList.add('del');

    btn.addEventListener('click',delTodo);

    li.append(h4,btn,p);
    ul.appendChild(li);

    li.id = todo.id;
 };
};

const makeTodo = (e)=> {
    e.preventDefault(); 
    const todo = {
        id: Date.now(),
        title: inputTitle.value,
        text: textarea.value
    }
    todos.push(todo);
    paintTodo(todo);
    saveLocal();

    inputTitle.value ='';
    textarea.value ='';
    
}



const init = () => {


    const userTodos = JSON.parse(localStorage.getItem('todos')); 
    if(userTodos) {
        userTodos.forEach((todo)=>{
            paintTodo(todo); //로컬스토리지에잇는 데이터들을 다시화면에 그려줌
        });
        
        todos= userTodos;
    };
    
};


init();
saveBtn.addEventListener('click',makeTodo);

