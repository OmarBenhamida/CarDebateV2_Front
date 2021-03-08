import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateurs.models';
import { SessionService } from 'src/app/Shared/session.service';
import { UtilisateurService } from 'src/app/Shared/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  o = new Utilisateur();
  constructor(
    public service: UtilisateurService, public session: SessionService
    , private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
    });
  }

  submit(myForm) {
    // console.log(myForm.value);
    const o = myForm.value;
    console.log(o);
    // this.snackbar.openMySnackBar('login...');
    // console.log(o);
    this.service.login(o).subscribe((r: any) => {

      if (r.code === 1) {
        this.session.user = r.user;
        

        if (r.user.role === 1) 
        {
          this.router.navigate(['/administrateur/']);
          console.log(r);
        } else if (r.user.role === 3)
         {
          this.router.navigate(['/testdeux']);
          console.log(r);
         }
         else 
        {

          this.router.navigate(['/utilisateur/menu']);
          console.log(r);

        }

      }
       else {

        console.log('invalid mail ou passeword');
      }
    });
  }


}
