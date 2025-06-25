let input = document.getElementById("inputbox");
let button = document.querySelectorAll("button");
let string = "";


button.forEach((button) =>{
   button.addEventListener('click' , (e)=>{
      let btnText =  e.target.innerText;
      if (btnText === 'AC') {
        string = "";
        input.value = string;
      }else if (btnText === 'DEL') {
        string = string.slice(0,-1);
        input.value = string;
      } else if (btnText === '=') {
        try{
        string = eval(string);
        input.value = string;
        }catch{
            input.value = "Error";
            string = "";
        }
      }else{
        string += btnText;
        input.value = string;

      }
   });
});