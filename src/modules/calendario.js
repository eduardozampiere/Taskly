export default class Calendario{
	constructor(month=0, year=0){
		this.maxDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31]
		if( (month === 0) || (month === 0 && year === 0) || month > 12) this.date = new Date();

		else if(month > 0 && year === 0){
			let aux = new Date();
			this.date = new Date(aux.getFullYear(), month - 1, 1);
		}

		else{
			this.date = new Date(year, month - 1, 1);
		}

		this.day = this.date.getDate();
		this.month = this.date.getMonth();
		this.year = this.date.getFullYear();
		this.calendar = [];

		if ((this.year % 4 === 0) && ((this.year % 100 !== 0) || (this.year % 400 === 0))) {
			this.maxDays[2] = 29;
		}

		
		this.firstDay = new Date(this.year, this.month, 1);
		this.firstWeekDay = this.firstDay.getDay();

		let week = [];
		for(let i = 0; i < this.firstWeekDay; i++){
			week.push( this.maxDays[this.month] - this.firstWeekDay + i + 1);
		}
		week.push(1);

		for(let i = 2; i <= this.maxDays[this.month + 1]; i++){
			let nextDay = new Date(this.year, this.month, i);
			week.push(i);
			if(nextDay.getDay() === 6){
				this.calendar.push(week);
				week = [];
			}
		}
		if(week.length > 0){
			let max = week.length;
			for(let i = 1; i <= 7 - max; i++){
				week.push(i);
			}
			this.calendar.push(week);
		}

		return this.calendar;
	}
}