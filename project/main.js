/*function loadjson(file,callback) {
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState === 4 && xhr.status == "200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}

loadjson("data.json",function(text){
	var data = JSON.parse(text); //serialized data
	console.log(data);
	basic(data.details);
	careerobj(data.careerobjective);
	education(data.educationqualification);
	skills(data.technicalskills);
	//fourth(data.project);
})*/

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

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerobj(data.careerobjective);
	education(data.educationqualification);
	skills(data.technicalskills);
	fourth(data.project);
	declaration(data.declare);
})

var child1 = document.querySelector(".child1");
function basic(det){

	var image = document.createElement("img");
	image.src="profile.png";
	child1.appendChild(image);

	var name = document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);

	var email = document.createElement("a");
	email.href="mailto:tejpotharlanka@gmail.com"
	email.textContent=det.email;
	child1.appendChild(email);

	var number = document.createElement("h4");
	number.textContent=det.number;
	child1.appendChild(number);	

	var address=document.createElement("h2");
	address.textContent="Address";
	child1.appendChild(address);

	child1.appendChild(document.createElement("hr"));

	var address1=document.createElement("p");
	address1.textContent=det.Address;
	child1.appendChild(address1);

	
}

var child2 = document.querySelector(".child2");
function careerobj(career){

	var object=document.createElement("h2");
	object.textContent="CareerObjective";
	child2.appendChild(object);

	var obj = document.createElement("p");
	obj.textContent=career.info;
	child2.appendChild(obj);
	child2.appendChild(document.createElement("hr"));

}

function education(edu){

	var edu1=document.createElement("h2");
	edu1.textContent="Education Qualifications";
	child2.appendChild(edu1);

	/*var edu1 = document.createElement("p");
	edu1.textContent=education.institute;
	child2.appendChild(edu1);*/

	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute
		+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+
		"</td><td>"+edu[i].percentage+"</td></tr>";
	}

	table1.innerHTML=tabledata;

	child2.appendChild(document.createElement("hr"));

}

function skills(skillinfo){
	var hd = document.createElement("h2");
	hd.textContent="Technical Skills";
	child2.appendChild(hd);

	for(i=0;i<skillinfo.length;i++){
		var title=document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var skillul=document.createElement("ul");
		var skillli=document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);
	}

	child2.appendChild(document.createElement("hr"));
}

function fourth(pro){

	var proj=document.createElement("h2");
	proj.textContent="Project";
	child2.appendChild(proj);

	for(i=0;i<pro.length;i++){
		var title=document.createElement("h4");
		title.textContent=pro[i].des;
		child2.appendChild(title);

		var info=document.createElement("p");
		//var info=document.createElement("li");
		info.textContent=pro[i].des1;
		//skillul.appendChild(skillli);
		child2.appendChild(info);
	}
	child2.appendChild(document.createElement("hr"));

}
function declaration(declare){

	var object=document.createElement("h2");
	object.textContent="Declaration";
	child2.appendChild(object);

	var obj = document.createElement("p");
	obj.textContent=declare.info;
	child2.appendChild(obj);
	child2.appendChild(document.createElement("hr"));

}