import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whastapp: string;
}

export interface TeacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ( {teacher}) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.bio}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>{teacher.cost}</p>
                <a target="blank" onClick={createNewConnection} href={`http://wa.me/${teacher.whastapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;