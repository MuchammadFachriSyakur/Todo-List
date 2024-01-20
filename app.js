const button_create_list = document.querySelector(".container .page1 .create_list button");
const input_description = document.getElementById('list');
const list_wrap = document.querySelector(".container .page1 .list_wrap");
const list = document.querySelectorAll(".container .page1 .list_wrap .item").length;
let i = 0;

const create_list = ((e)=>{
  if(input_description.value){
    const item = document.createElement('div');
    item.className = "item";
    item.innerHTML = `
      <input type="checkbox"/>
      <p class="description">${input_description.value}</p>
      <button id="edit">E</button>
      <button id="hapus">H</button>
    `;
    list_wrap.appendChild(item);
    i+= 1;
  }
  if(list == 0){
    document.querySelector(".container .page1 .list_wrap").classList.add('aktif');
  }else{
    document.querySelector(".container .page1 .list_wrap").classList.remove('aktif');
  }
  delete_list();
  edit();
  check();
});

button_create_list.addEventListener("click", create_list);

function delete_list(){
  const list = document.querySelectorAll(".container .page1 .list_wrap .item #hapus");

  list.forEach((e)=>{
    e.addEventListener("click", (e)=>{
      i-= 1;
      e.target.parentElement.remove();
    });
  });
}

function edit(){
  const list = document.querySelectorAll(".container .page1 .list_wrap .item #edit");
  
  list.forEach((e)=>{
    e.addEventListener("click", (e)=>{
      const teks = e.target.parentElement.querySelector(".description");
      input_description.value = teks.textContent;
      e.target.parentElement.remove();
    });
  });
}

function check(){
  const list = document.querySelectorAll(".container .page1 .list_wrap .item input");
  
  list.forEach((e)=>{
    e.addEventListener("click", (e)=>{
      e.target.parentElement.querySelector(".description").classList.toggle('aktif');
    });
  });
}


  document.querySelector(".container .page1 .list_wrap .no_list").classList.add('aktif');