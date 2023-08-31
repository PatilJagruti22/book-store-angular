import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public name: string = '';
  //public email: string = '';
  public id: string = '';

  constructor(private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) =>{
      this.name = queryParams['name'];
      //this.email = queryParams['email'];
      this.id = queryParams['id'];
      console.log(queryParams)
    });
  }

  goToSignup(): void{
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetails(): void{
    this.router.navigate(['/books/book-details', 100, 'author', 300]);
  }
}
