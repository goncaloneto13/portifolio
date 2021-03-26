import './contato.css'
import {AiOutlineWhatsApp, AiOutlineComment,AiOutlineMail} from 'react-icons/ai'

export default function Contato(){

    return(
        <div className='contato'>
            <div className='contato-box'>
                <h1><AiOutlineComment ></AiOutlineComment>  Contato </h1>

                <h2><AiOutlineMail ></AiOutlineMail> E-mail: <a href="mailto:g.neto137@gmail.com?subject=Olá%20Gonçalo,%20encontrei%20seu%20email%20pelo%20portifólio">g.neto137@gmail.com</a></h2>
                <h2><AiOutlineWhatsApp color={'green'}></AiOutlineWhatsApp> Telefone: <a target="_blank" href=' https://api.whatsapp.com/send?phone=5586988547825&text=Olá%20Gonçalo,%20encontrei%20seu%20número%20pelo%20portifólio'>(86) 98854-7825</a>  </h2>
            </div>

            <h4>2021, by Gonçalo Amarante</h4>
        </div>
    )
}