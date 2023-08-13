import { useState } from "react"



const Checkout = () =>{


    let [valor,setValor] = useState(false)
    
    let generator = ()=>{
        let result = ''
            let abc = 'qwertyuiopñlkjhgfdsazxcvbnm123457689'
            for (let index = 0; index < 8; index++) {
                    let number = Math.floor(Math.random() * (abc.length - -1)+ 0)
                    let letter = abc[number]
                    result += letter
            }
            return result
    }
    let seguimiento = generator()

    let verificar = (e)=>{
        e.preventDefault()
        let email1 = document.getElementById('email1').value.split('').filter(e=> e !== ' ').join('')
        let email2 = document.getElementById('email2').value.split('').filter(e=> e !== ' ').join('')
        let nombre = document.getElementById('nombre').value.split('').filter(e=> e !== ' ').join('')
        let apellido = document.getElementById('apellido').value.split('').filter(e=> e !== ' ').join('')
        
        
        if((email1 == email2) && nombre.length > 0 && apellido.length > 0){
            let result = ''
            let abc = 'qwertyuiopñlkjhgfdsazxcvbnm123457689'
            for (let index = 0; index < 8; index++) {
                    let number = Math.floor(Math.random() * (abc.length - -1)+ 0)
                    let letter = abc[number]
                    result += letter
            }
            setValor(true)
        }
    }


    return (
        <>
            <form>
        <div className="container">
            <div className="colum">
            <div className="col ">
            <label className="form-label d-flex">Ingrese un email:</label>
            <input type='email' className='form-control' id="email1"  name='email1' placeholder="ejemplo123@hotmail.com"/>
            </div>
            <br/>
            <div className="col ">
            <label className="form-label d-flex">Reingrese de vuelta el email para confirmar:</label>
            <input type='email' className='form-control' id="email2" name='email2'placeholder=""/>
            </div>
            <br/>
            <div className="col">
            <label className="form-label d-flex">Ingrese su nombre:</label>
            <input type='text' className='form-control' id="nombre" name='nombre' placeholder="German"/>
            </div>
            <br/>
            <div className="col">
            <label className="form-label d-flex">Ingrese su apellido:</label>
            <input type='text' className='form-control' id="apellido" name='apellido' placeholder="Perez"/>
            </div>
            </div>
        </div>
        <br/>
        <br/>
        {valor? <div>Compra finalizada!! tu numero de segimiento es: <strong>{seguimiento}</strong> </div> : <button type="submit" className="btn btn-success" onClick={verificar}>FINALIZAR COMPRA</button>}
        
        </form>
        </>
    )

}

export default Checkout