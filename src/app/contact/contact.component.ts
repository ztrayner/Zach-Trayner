import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/common';
import { GlobalValidator } from '../global-validator';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, ConnectionBackend, HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [Http, ConnectionBackend, HTTP_PROVIDERS]
})
export class ContactComponent implements OnInit {
    public contactForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    public errorMessage: string;
    public response: any = {};

    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

    ngOnInit() {
        this.contactForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(4)]],
            _replyto: ['', [<any>Validators.required, <any>Validators.minLength(5), Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            message: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            _gotcha: [''],
            _subject: ['Inquiry from zachtrayner.com']
        });
    }


}
