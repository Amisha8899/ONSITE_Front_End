var fontStyle = document.getElementById("sb1")
var fontColor = document.getElementById("sb2")
var fontSize = document.getElementById("sb3")
var textArea = document.getElementById("textArea")
var style = ["Times New Roman","Georgia","Arial","Helvetica","Verdana","Cursive"]
var color = ["Red","Green","Blue","Yellow","Pink"]
function change(){
for(var i=0 ; i<style.length ; i++){
    if (fontStyle.options[fontStyle.selectedIndex].value == style[i]){
       textArea.style.fontFamily=style[i];
    }
}
for (var i=0 ; i<color.length ; i++){
    if (fontColor.options[fontColor.selectedIndex].value == color[i]){
        textArea.style.color=color[i]
    }
}
for (var i=0 ; i<=22 ; i=i+2){
    if (fontSize.options[fontSize.selectedIndex].value==(i+"px")){
        textArea.style.fontSize=(i+"px")
    }
}
}
// function SaveBtn(){
//     var a = prompt("Give a name to your file:- ")
//     var input_textarea = document.querySelector('#textArea');
//     var save_button = document.querySelector('#SaveBtn');
    
//     save_button.addEventListener('click', updateOutput);
    
//     input_textarea.textContent = localStorage.getItem('content');
//     input_textarea.value = localStorage.getItem('content');
    
//     function updateOutput() {
//          Del();
//         localStorage.setItem('content', input_textarea.value);
//         input_textarea.textContent = input_textarea.value;
// }
// alert("File saved successfully as "+a)
// }