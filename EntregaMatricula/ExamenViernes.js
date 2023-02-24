
const arrayCoches = [];

const coches = [
    {
        matricula: '1234ABC',
        modelo: 'Modelo1',
        propietario: 'Maria',
        multas: '1'
    },
    {
        matricula: '1234BCA',
        modelo: 'Modelo2',
        propietario: 'Paula',
        multas: '5'
    },
    {
        matricula: '1234CAB',
        modelo: 'Modelo3',
        propietario: 'Saul',
        multas: '8'
    }
];

function buscarMatricula() {
    const matriculaBoton = document.getElementById('matricula').value;


    validarMatricula(matriculaBoton)
        .then(matriculaValida => {
            if (matriculaValida) {
                return buscarInfoCoche(matriculaBoton); //Funcion para buscar los demas datos
            } else {
                throw new Error('La matrícula no esta regristrada');
            }
        })
        .then(infocoche => {
            mostrarInfoCoche(infocoche);
        })
        .catch(error => {
            console.error(error);
        });
}




function validarMatricula(matricula) {
    return new Promise((resolve, reject) => {


        const regex = /^[0-9]{4}[A-Z]{3}$/;

        if (regex.test(matricula)) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}


//Aqui esta la funcion
function buscarInfoCoche(matricula) {
    return new Promise((resolve, reject) => {
        const CocheEncontrado = coches.find(coche => coche.matricula === matricula);

        if (CocheEncontrado) {
            resolve(CocheEncontrado);
        } else {
            reject(new Error('La matrícula no está registrada en nuestra base de datos'));
        }
    });
}


function mostrarInfoCoche(infocoche) {
    const modelo = infocoche.modelo;
    const propietario = infocoche.propietario;
    const multas = infocoche.multas;




    console.log(`Modelo: ${modelo}`);
    console.log(`Propietario: ${propietario}`);
    console.log(`Multas: ${multas}`);



    function local() {

        localStorage.setItem('DatosCoche', JSON.stringify(modelo.propietario.multas))
        var arrayinfos = JSON.parse(localStorage.getItem('DatosCoche'))
        console.log(arrayinfos)

        /*
        localStorage.setItem('DatosCoche', JSON.stringify(propietario))
        var arrayinfos = JSON.parse(localStorage.getItem('DatosCoche'))
        console.log(arrayinfos)

        localStorage.setItem('DatosCoche', JSON.stringify(multas))
        var arrayinfos = JSON.parse(localStorage.getItem('DatosCoche'))
        console.log(arrayinfos)*/
    }

    local();

}

function pintar() {

    let fila = document.createElement("th");
    let contenido = document.createTextNode(modelo.modelo)
    fila.append(contenido)
    document.body.append(fila)
}

pintar();



