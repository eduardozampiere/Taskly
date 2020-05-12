import React from 'react'
import Card from './Card';
import Calendar from './Calendar';

function showScroll(){
    let aside = document.getElementsByTagName('aside')[0];
    aside.className = 'overflow'
    
}

function hideScroll(){
    let aside = document.getElementsByTagName('aside')[0];
    aside.className = ''
}

export default () => {
    return (
        <aside onMouseEnter={showScroll} onMouseLeave={hideScroll}>
            <div className="div-logo">
                <div className="div-icon">+</div>
                <span>Taskly</span>
            </div>

            <div className="aside-header">
                <span>Visão da semana</span>
                <a href={() => {}}>Ver todos</a>
            </div>

            <div className="aside-cards">
                <Card />
            </div>

            <div className="aside-calendar">
                <Calendar />
            </div>

        </aside>            
    )
}