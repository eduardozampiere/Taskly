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
            description: 'Marcar um exame de sangue',
            image: 'data:image/png;base64,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'
        });

        this.tarefasSemana.push({
            id: 2,
            title: 'Terminar projeto',
            date: '11 Maio 2020 - 09:00 AM',
            tag: 'Profissional',
            description: 'Terminar o projeto',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLbOfy0mX_JOhXKa76Q3avLBoHg3UORZiiNeGZHlHqTYDd_OtN&usqp=CAU'
        });
    }

    renderWeekTasks(){
        return this.tarefasSemana.map(tarefa => {
            return (
            <div className="card week" key={tarefa.id}>
                <div className="card-icon col-2">
                    <div className="icon">
                        <img src={tarefa.image} />
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