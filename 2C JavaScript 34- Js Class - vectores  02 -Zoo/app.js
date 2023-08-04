class CZooAnimal{
        constructor(IdAnimal,name,cageNumber,IdTypeAnimal,weight){
            this.IdAnimal = IdAnimal;
            this.name = name;
            this.cageNumber = cageNumber;
            this.IdTypeAnimal = IdTypeAnimal;
            this.weight = weight;
        }
        get getidAnimal(){return this.IdAnimal};
        get getName(){return this.name};
        get getCageNumber(){return this.cageNumber}
        get getWeight(){return this.weight}
        get getIdTypeAnimal(){return this.IdTypeAnimal};

}

let animales = [];

function addAnimal(idA,na,cagN,idT,wei){
    animales.push(new CZooAnimal(idA,na,cagN,idT,wei));
    console.log(animales)
}
function filterCage5kg3(){
    let animal = animales.filter(num => num.getCageNumber == "2" && parseFloat(num.getWeight) < 3)
    return animal
}
function filterFelinos(){
    let animal = animales.filter(num => parseInt(num.getCageNumber) > 2 && parseInt(num.getCageNumber) < 5) 
    return animal
}
function filterCage4(){
    let animal = animales.filter(num => parseInt(num.getCageNumber) == 4 && parseInt(num.getCageNumber) < 120) 
    return animal
}

function mostrar(arr){
    let cont = document.getElementById("tableAnimal");
    console.log(arr)
    while (cont.rows.length > 1) {
        cont.deleteRow(1);
      }
      for (const a of arr) {
        let tdIdAnimal = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdJaula = document.createElement("td");
        let tdTipoAnimal = document.createElement("td");
        let tdPeso = document.createElement("td");
        let tr = document.createElement("tr");
        console.log(a)
        tdIdAnimal.innerHTML = a.getidAnimal;
        tdNombre.innerHTML = a.getName;
        tdJaula.innerHTML = a.getCageNumber;
        tdTipoAnimal.innerHTML = a.getIdTypeAnimal;
        tdPeso.innerHTML = a.getWeight;
        tr.appendChild(tdIdAnimal);
        tr.appendChild(tdNombre);
        tr.appendChild(tdJaula);
        tr.appendChild(tdTipoAnimal);
        tr.appendChild(tdPeso);
        cont.appendChild(tr)
    }
}

document.getElementById("btnEnviar").addEventListener("click",()=>{
    event.preventDefault();
    let id_animal = document.getElementById("idAnimal").value;
    let name= document.getElementById("name").value;
    let cageNumber= document.getElementById("cageNumber").value
    let IdType= document.getElementById("idTypeNumber").value;
    let weight= document.getElementById("weight").value;
    addAnimal(id_animal,name,cageNumber,IdType,weight);
    
})

document.getElementById("btnA").addEventListener("click",()=>{
    event.preventDefault();
    mostrar(filterCage5kg3());

})
document.getElementById("btnB").addEventListener("click",()=>{
    event.preventDefault();
    mostrar(filterFelinos());

})
document.getElementById("btnC").addEventListener("click",()=>{
    event.preventDefault();
    mostrar(filterCage4());
})