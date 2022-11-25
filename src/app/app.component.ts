import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books';
  constructor (public authService: AuthService,
    private router:Router
    ) {}

    logout(){
  this.authService.logout();
}

    ngOnInit () {
      this.authService.loadToken();
      if (this.authService.getToken()==null ||
       this.authService.isTokenExpired())
      this.router.navigate(['/login']);
      this.authService.decodeJWT();
      this.authService.setLoggedIn();
      
    }
   
}
