import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.tarefasSemana = []

        this.tarefasSemana.push({
            id: 1,
            title: 'Marcar um médico',
            date: '11 Maio 2020 - 09:00 AM',
            tag: 'Pessoal',
            description: 'Marcar um exame de sangue'
        });

        this.tarefasSemana.push({
            id: 2,
            title: 'Terminar projeto',
            date: '11 Maio 2020 - 09:00 AM',
            tag: 'Profissional',
            description: 'Terminar o projeto'
        });
    }

    renderWeekTasks(){
        return this.tarefasSemana.map(tarefa => {
            return (
            <div className="card week" key={tarefa.id}>
                <div className="card-icon col-2">
                    <div className="icon">

                    </div>
                </div>
                <div className="card-body col-10">
                    <div className="weekly-title">
                        {tarefa.title}
                    </div>
                    <div className="weekly-date">
                        {tarefa.date}
                    </div>
                    <div className="weekly-tag">
                        <span>{tarefa.tag}</span>
                    </div>
                    <div className="weekly-content">
                        {tarefa.description}
                    </div>
                </div>                        
            </div>
            );
        })
    }

    render(){
       return(
        <>
            {this.renderWeekTasks()}
            <div className="card card-add">
                <div className="card-icon col-2">
                    <div className="icon">
                        +
                    </div>
                </div>
                <div className="card-body col-10">
                    <div className="weekly-title">
                        Adicionar nova
                    </div>
                </div>                        
            </div>
        </>
       )
    }
}

export default Card;