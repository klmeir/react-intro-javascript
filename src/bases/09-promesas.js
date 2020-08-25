
import { getHeroeById }  from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () => {        
//         const heroe = getHeroeById(2);        
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000 )

// });

// promesa.then( ( heroe ) => {    
//     console.log('heroe', heroe);
// })
// .catch( (err) => console.log(err) );

const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {        
            const heroe = getHeroeById(id);        
            heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe');            
        }, 2000 )
    
    });
}

getHeroByIdAsync(2)
    .then( console.log )    
    .catch( console.warn );