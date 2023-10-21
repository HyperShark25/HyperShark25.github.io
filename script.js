let arr2 = JSON.parse(localStorage.getItem("tasks")) || [];
let inp = document.getElementById("input");
let task = document.getElementById("task");

window.onload = function () {
	data();
}

function add_task() {
	let li2 = document.createElement("li");
	let rem2 = document.createElement("button");
	let upd = document.createElement("button");
	upd.textContent = "Edit";
	upd.className = "edit";
	rem2.textContent = "Remove";
	rem2.className = "remove";
	rem2.addEventListener("click", function() {
		arr2.splice(j, 1);
		localStorage.setItem("tasks", JSON.stringify(arr2));
		task.removeChild(li2);
		window.location.reload(true);
	});
	upd.addEventListener("click", function() {
		let li3 = this.parentNode;
		inp.value = li3.textContent.slice(0, -10);
		this.parentElement.remove();
		arr2.splice(j, 1);
		parentElement.remove();
		localStorage.setItem("tasks", JSON.stringify(arr2));
		arr2.push(inp.value);
		window.location.reload(true);
	});
	li2.textContent = inp.value;
	task.appendChild(li2);
	li2.appendChild(rem2);
	li2.appendChild(upd);
	arr2.push(inp.value);
	localStorage.setItem("tasks", JSON.stringify(arr2));
	inp.value = "";
	window.location.reload(true);
}

function data() {
	for (let j=0; j < arr2.length; j++) {
		let li2 = document.createElement("li");
		let rem2 = document.createElement("button");
		let upd = document.createElement("button");
		upd.textContent = "Edit";
		upd.className = "edit";
		rem2.textContent = "Remove";
		rem2.className = "remove";
		rem2.addEventListener("click", function() {
			arr2.splice(j, 1);
			localStorage.setItem("tasks", JSON.stringify(arr2));
			task.removeChild(li2);
		});
		upd.addEventListener("click", function() {
			let li3 = this.parentNode;
			inp.value = li3.textContent.slice(0, -10);
			this.parentElement.remove();
			arr2.splice(j, 1);
			parentElement.remove();
			localStorage.setItem("tasks", JSON.stringify(arr2));
			arr2.push(inp.value);
		});
		
		li2.textContent = arr2[j];
		task.appendChild(li2);
		li2.appendChild(rem2);
		li2.appendChild(upd);
		}
	}
