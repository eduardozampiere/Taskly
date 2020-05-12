import React, {Component} from 'react';
import Task from './Task';



class MainMenu extends Component{

    constructor(props){
        super(props);

        this.today = new Date();
        this.weekDay = this.today.getDay();
        this.weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    }


    render(){
        return (
            <main>
                <div className="main-header">
                    <div className="main-title-div">
                        <span className="main-title">Agenda de hoje</span>
                        <span className="main-day">{this.weekDays[this.weekDay]} {this.today.getDate()}</span>
                    </div>
                    <div className="main-add">
                        <div>+</div>
                    </div>
                </div>

                <div className="main-content">
                    <Task />
                </div>
            </main>
        )
    }
}

export default MainMenu;