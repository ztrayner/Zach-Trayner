import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-homepage',
	templateUrl: 'homepage.component.html',
	styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {
    title = 'Zach Trayner';
    tagline = 'Front-End Web Developer';

	constructor() { }

	ngOnInit() {
	}

}
