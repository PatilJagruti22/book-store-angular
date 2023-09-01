import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // goToLogin(): void{
  //   this.router.navigate(['/auth/login']);
  // }

  // goToSignup(): void{
  //   this.router.navigate(['/auth/signup']);
  // }

  // goToBookDetails(): void{
  //   this.router.navigate(['/books/book-details', 100, 'author', 300]);
  // }

  // goToHome(){
  //   this.router.navigate([''])
  // }
}
