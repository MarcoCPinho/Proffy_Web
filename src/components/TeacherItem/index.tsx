import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

interface TeacherHeaderProps {
    nome: string;
    materia: string;
    conteudo1: string;
    conteudo2: string;
    valor: string;
}

const TeacherItem: React.FC<TeacherHeaderProps> = (props) => {
    return (
        <article className="teacher-item" >
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHUoaWQSgOH9Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=SwoqMUT2Hh0S8gfFITc8qIdmAE42guMBvby3A1X8cI0" alt="Marco Pinho" />
                <div>
                    <strong>{props.nome}</strong>
                    <span>{props.materia}</span>
                </div>
            </header>
            <p>
                {props.conteudo1}
                <br /><br />
                {props.conteudo2}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>{props.valor}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                </button>
            </footer>
        </article>
    );
    /*
    img src="https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4" alt="Marco Pinho" />
  
    <img src="https://instagram.fbnu3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79731647_534650083803335_5657516005316886528_n.jpg?_nc_ht=instagram.fbnu3-1.fna.fbcdn.net&_nc_ohc=vqtBFd5l3BcAX9ORo_w&oh=145703e975188371256d0f5b24bdbf8e&oe=5F53A749" alt="Marco Pinho" />
    */
}
export default TeacherItem;