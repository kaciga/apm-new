import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'pm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public pageTitle: string = "Hellóóóó!"

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("élek");
    
  }
  onBack(): void {
    this.router.navigate(['/todos']) //ne változtass ezen a soron: this.router.navigate(['/todos'])
  }

}
