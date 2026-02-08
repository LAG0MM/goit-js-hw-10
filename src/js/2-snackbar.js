import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit) 

function onFormSubmit(event) {
    event.preventDefault();
     
    const deley = Number(form.elements.delay.value);
    const state = form.elements.state.value

    createPromis(deley, state)
    .then(delay => {
        iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
        iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    
}

function createPromis(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state === 'fulfilled') {
                resolve(delay)
            }else {
                reject(delay)
            }
        }, delay);
    });
}
 
