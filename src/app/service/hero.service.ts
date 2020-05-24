import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    private villain:Hero[]=[
      {
        id:0,
        nombre: "Thanos",
        bio: "Thanos fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su enorme población inevitablemente agotaría todo el suministro de recursos disponibles y eso condenaría a las especies a morir.",
        img: "assets/img/thanos.png",
        aparicion: "1973-02-01",
        casa:"Marvel"
      },
      {
        id:1,
        nombre: "Hela",
        bio: "Hela Odinsdottir fue la Diosa de la Muerte y la antigua Ejecutora de Asgard, que fue encarcelada por milenios en Hel. Ella fue liberada después de la muerte de su padre Odín e inmediatamente enfrentó a sus hermanos menores, Thor y Loki.",
        img: "assets/img/hela.png",
        aparicion: "1964-03-05",
        casa:"Marvel"
      },
      {
        id:2,
        nombre: "Joker",
        bio: "El archienemigo de Superman nació en 1940 de la mano de Jerry Siegel y Joe Shuster. Luthor se caracteriza por ser un villano sin poderes. Aunque, eso sí, tiene mucho dinero. Y al fin y al cabo el dinero da poder, ¿no?",
        img: "assets/img/joker.png",
        aparicion: "1940-11-01",
        casa:"DC"
      },
      {
        id:3,
        nombre: "Nebula",
        bio: "Nebula es una Lufomoide y la hija adoptiva de Thanos, al igual que Gamora, después que éste atacara su planeta natal. Ella se volvió una asesina y trabajó para él durante años hasta que decidió traicionarlo durante la Búsqueda del Orbe, uniéndose a Ronan en su lugar para destruir a los Guardianes de la Galaxia, quienes estaban aliados con Gamora, para gran decepción de Nebula.",
        img: "assets/img/nebula.png",
        aparicion: "1985-07-01",
        casa:"Marvel"
      },
      {
        id:4,
        nombre: "Harley Quinn",
        bio: "El archienemigo de Superman nació en 1940 de la mano de Jerry Siegel y Joe Shuster. Luthor se caracteriza por ser un villano sin poderes. Aunque, eso sí, tiene mucho dinero. Y al fin y al cabo el dinero da poder, ¿no?",
        img: "assets/img/harley-quinn.png",
        aparicion: "1940-11-17",
        casa:"DC"
      }
    ]

    private hero:Hero[]=
        [
            {
              id:0,
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              id:1,
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              id:2,
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel"
            },
            {
              id:3,
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel"
            },
            {
              id:4,
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC"
            },
            {
              id:5,
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel"
            },
            {
              id:6,
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel"
            }
    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getHeros():Hero[]{
        return this.hero;
    }

    getHero(id:number){
        return this.hero[id];   
    }

    getVillains():Hero[]{
      return this.villain;
    }

    getVillain(id:number){
      return this.villain[id];
    }


    buscarHeroe(palabra:string):Hero[]{
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.hero){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      return heroArr;
    }

    buscarVillain(palabra:string):Hero[]{
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.villain){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      return heroArr;
    }

}

export interface Hero{
    id: number,
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string
}