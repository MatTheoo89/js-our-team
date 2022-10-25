console.log('collegato');

const staff = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll	 ',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez	',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  }
];

// MILESTONE 0 Mi restituisce in console ogni singolo onj come array
//console.log(staff);

// // MILESTONE 1 Stampare su console le informazioni di nome, ruolo e la stringa della foto

// for(let individual of staff){
//   const output = `${individual.name} - ${individual.role} - assets/img/${individual.image} `
//   console.log(output);
// }

// // MILESTONE 2 Stampare le stesse informazioni su DOM sotto forma di stringhe
// const lista = document.querySelector('.lista')
// for(let individual of staff){
//   const output = `<li>${individual.name} - ${individual.role} - assets/img/${individual.image} </li>`
//   lista.innerHTML += output
// }

// MILESTONE 3 Stampare delle card formattate contenete immagini e testo
const row = document.querySelector(".row");

for(let individual of staff){
  //console.log(individual);

  let card = `
  
  <div class="col-4">
  
    <div class="card" style="width: 18rem;">
      <div class="card-image">
        <img src="assets/img/${individual.image}" class="card-img-top" alt="${individual.name}">
      </div>
      <div class="card-body">
        <p class="card-text text-center">${individual.name}</p>
        <p class="card-text text-center">${individual.role}</p>
      </div>
    </div>
  
  </div>
  `
  row.innerHTML += card;
}

