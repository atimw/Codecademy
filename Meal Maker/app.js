const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: []
	},
	get appetizers(){
		return this._courses.appetizers;
	},
	set appetizers(appetizers){
		this._courses.appetizers = appetizers;
	},
	get mains(){
		return this._courses.mains;
	},
	set mains(mains){
		this._courses.mains = mains;
	},
	get desserts(){
		return this._courses.desserts;
	},
	set desserts(desserts){
		this._courses.desserts = desserts;
	},
	get courses(){
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts
		};
	},
	addDishToCourse(courseName,dishName,dishPrice){
		
	}
};