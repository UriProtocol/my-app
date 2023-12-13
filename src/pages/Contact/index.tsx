import { useEffect, useState } from "react"
import axios from "axios"
import ContactBlock from "../../components/ContactBlock"


const contactInitState = {
    nombre: "",
    email: "",
    mensaje: ""
}

export default function Contact(){

    const [contacts, setContacts] = useState([contactInitState])

    useEffect(() =>{
        getContact()
    }, [])

    async function getContact(){
        const {data} = await axios.get('http://18.188.16.173:3000/contact')
        setContacts(data)
    }

    return(
        <>
        {
            contacts.map(c =>{
                return (
                    <ContactBlock 
                        titulo={c.nombre}
                        email={c.email}
                        mensaje={c.mensaje}
                    />
                )
            })
        }
        </>
    )
}