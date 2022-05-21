const data = "data.json";
const jsondata = document.querySelector('#datajson');

const getjsondata = ()=>{
    fetch(data)
    .then(response=>{
        return response.json();
    }).then(responseJson =>{
        console.log(responseJson);
    }).catch(error =>{
        console.error(error);
    });

}

document.addEventListener('DOMContentLoaded', getjsondata);