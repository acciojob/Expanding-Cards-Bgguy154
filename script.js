//your JS code here. If required.
const panel=document.querySelectorAll(".panel");
panel.forEach((panelElement)=>{
	panelElement.addEventListener('click',()=>{
		removeElem();
		panelElement.classList.add('active');
	})
})

function removeElem(){
	panel.forEach((e)=>e.classList.remove('active'))
}