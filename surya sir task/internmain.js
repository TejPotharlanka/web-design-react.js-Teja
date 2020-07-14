function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("interndata.json");
newfile.then(interndata=>{
	//console.log(data);
	basic(interndata.details);
	overview(interndata.overview);
	content(interndata.content);
	trainerdet(interndata.trainerdetails);
})

var child1 = document.querySelector(".child1");
function basic(details){

	var image = document.createElement("img");
	image.src="ReactJS.jpg";
	child1.appendChild(image);

	var head=document.createElement("h2");
	head.textContent="Names of Trainers :";
	child1.appendChild(head);

	for(i=0;i<details.length;i++){
		var names=document.createElement("h4");
		var namesul=document.createElement("ul");
		var namesli=document.createElement("li")
		namesli.textContent=details[i].names;
		namesul.appendChild(namesli);
		child1.appendChild(namesul);
	}
	
}

var child2 = document.querySelector(".child2");
function overview(view){

	var object=document.createElement("h2");
	object.textContent="ReactJS Certification Course Overview : ";
	child2.appendChild(object);

	var obj = document.createElement("p");
	obj.textContent=view.des;
	child2.appendChild(obj);
	child2.appendChild(document.createElement("hr"));

}
function content(cont){
	var head=document.createElement("h2");
	head.textContent="Content :";
	child2.appendChild(head);

	for(i=0;i<cont.length;i++){
		var names=document.createElement("h4");
		var namesul=document.createElement("ul");
		var namesli=document.createElement("li")
		namesli.textContent=cont[i].data;
		namesul.appendChild(namesli);
		child2.appendChild(namesul);
	}
}

function trainerdet(trainerdetails){

	var heading=document.createElement("h2");
	heading.textContent="Trainer Details :";
	child2.appendChild(heading);

	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<trainerdetails.length;i++){
		tabledata+="<tr><td>"+trainerdetails[i].name
		+"</td><td>"+trainerdetails[i].mail+"</td></tr>";
	}

	table1.innerHTML=tabledata;

	//child2.appendChild(document.createElement("hr"));

}