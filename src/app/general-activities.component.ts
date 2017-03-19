import { Component, OnInit} from '@angular/core';

@Component({
 
  selector: 'app-general-activities',
  templateUrl: './general-activities.component.html',
  styleUrls: ['./general-activities.component.css'],
  
})
export class GeneralActivitiesComponent implements OnInit {
	private href: any;
  constructor() { }

  ngOnInit() {
  }
  ngonclick(){
		window.open(this.href); 
		return false;
	}

}
