import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps { //esta interface irá forçar a alteração da funcao PageHeader para uma FC
    title: string; /* automaticamente entende que é uma propriedade obrigatória */
    description?: string; /*o "?:"informa que não uma propriedade obrigatória*/
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => { //PageHeader (":" -> é do tipo) é do tipo React.FunctionComponent informando as propriedade tipadas que o input pode receber (propriedades do "<PageHeaderProps>" no caso acima).... .... (props) -> recebo todas as propriedades... se eu quiser receber alguma em especifico, posso sempre fazer uma desestruturação ({ title }) -> pego so o title e ignoro o description, neste exemplo
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;