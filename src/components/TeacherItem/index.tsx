import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item" >
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHUoaWQSgOH9Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=SwoqMUT2Hh0S8gfFITc8qIdmAE42guMBvby3A1X8cI0" alt="Marco Pinho" />
                <div>
                    <strong>Marco Pinho</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );

    /**
     * img src="https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4" alt="Marco Pinho" />
    Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
            <br /><br />
    Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"

    <img src="https://instagram.fbnu3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79731647_534650083803335_5657516005316886528_n.jpg?_nc_ht=instagram.fbnu3-1.fna.fbcdn.net&_nc_ohc=vqtBFd5l3BcAX9ORo_w&oh=145703e975188371256d0f5b24bdbf8e&oe=5F53A749" alt="Marco Pinho" />
 
    As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.
            <br /><br />
    Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.
    */

}
export default TeacherItem;