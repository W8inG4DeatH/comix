import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent implements OnInit {

    constructor(
        public LoginService: LoginService
    ) { }

    ngOnInit(): void {
        
    }

}
