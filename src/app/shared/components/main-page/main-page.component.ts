import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  form : FormGroup;
  date = new Date();
  isError = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      personalData: new FormControl('', [Validators.required, Validators.requiredTrue]),
    });
  }

  startGame() {
    if (Object.values(this.form.value).every(el => el.toString().trim())) {
      localStorage['name'] = this.form.value.name;
      localStorage['link'] = this.form.value.link;
      this.router.navigate(['/game'])
    } else {
      this.isError = true;
    }
  }

}
