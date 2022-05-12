let count = 0

 function previewFiles(input) {
   const preview = document.getElementById('preview')
   const {
     files
   } = input

   Array.from(files).forEach(file => {
     const reader = new FileReader()

     reader.onload = e => {
       const div = document.createElement('div')
       const img = document.createElement('img')
       const button = document.createElement('button')
        div.width=600
        div.height=500
       button.textContent = "X"
       img.src = e.target.result
       img.width = 100
       img.height = 100
       img.alt = `file-${++count}`
       button.addEventListener('click', () => {
         preview.removeChild(div)
       })

       div.appendChild(button)
       div.appendChild(img)

       preview.appendChild(div)
     }

     reader.readAsDataURL(file)
   })
 }
    
let inpFile = document.querySelector('[name="file"]');
let div = document.querySelector('.area');
div.addEventListener("click",function() {
    this.children[1].click();
})
div.addEventListener("dragover",function(ev) {
    ev.preventDefault
})
div.addEventListener("drop",function() {
    this.children[1].click();
})