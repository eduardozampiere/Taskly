import React, {Component} from 'react';
import Calendario from '../modules/calendario';

class Calendar extends Component{

	constructor(props){
		super(props);
		this.today = new Date();
		this.month = this.today.getMonth();
		this.year = this.today.getFullYear();
		this.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
	}

	feedCalendar(){
		let c = new Calendario();	
		return c.map(week => {
			return (
				<tr>
					{week.map(day =>{
						return <td>{day}</td>
					})}
				</tr>
			)
		});

	}

	render(){


		return (
			<>
				<div className="calendario-header">
					<span id="mesCalendario">{this.months[this.month]}, {this.year}</span>
				</div>
				<div className="div-table">
				<table className="table table-borderless" id="calendario">
					<thead>
						<tr>
							<th>Dom</th>
							<th>Seg</th>
							<th>Ter</th>
							<th>Qua</th>
							<th>Qui</th>
							<th>Sex</th>
							<th>Sab</th>
						</tr>
					</thead>
					<tbody>
						{this.feedCalendar()}	
					</tbody>
				</table>
				</div>
			</>
	
		)
	}
}
export default Calendar;