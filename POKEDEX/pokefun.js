
//Consultar API


const fetchPokemon = () => {

    const pkename = document.getElementById("pokename");
    let Pinput = pkename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${Pinput}`;
    fetch(url).then((res) => {
        if (res.status =! 200){
            console.log(res);   
        }
        else{
            console.log(res);
            return res.json();
        }

    }).then((data)=> {
        console.log(data)
        let pokeIMG = data.sprites.front_default;
        pokeIMGEN(pokeIMG);
        
        //STATS
        let namep ='';
        namep+=`- ${data.name}`;
        document.getElementById("namepoke").innerHTML=namep;
        let nump ='';
        nump+=`#${data.id}`;
        document.getElementById("numpoke").innerHTML=nump;
        let altura='';
        altura+=`${data.height}`;
        document.getElementById("tipo1").innerHTML=altura;
        let peso='';
        peso+=`${data.weight}`;
        document.getElementById("tipo2").innerHTML=peso;
        let xp='';
        xp+=`${data.base_experience}`;
        document.getElementById("tipo4").innerHTML=xp;

        //ARRAYS
        let stacs1= data.stats.map( estadisticas => `${estadisticas.stat.name}:${estadisticas.base_stat}`);
        document.getElementById("tipo3").innerHTML= stacs1;
        let types=data.types.map(i => `${i.type.name}`);
        document.getElementById("tipo5").innerHTML=types;
        
    })
}

fetchPokemon();
        
//Imprimir datos al usuario
const pokeIMGEN = (url) => {
    const pimg = document.getElementById("pokeIMG");
    pimg.src=url;
}
