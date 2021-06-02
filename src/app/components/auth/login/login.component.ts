import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/dashboard-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  auth_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTAyMDE4NzA2OCIsImV4cCI6MTYyMzI3NjgxOH0.zGr46_3iRuNNBCAvwAlPFuyGchtk717sWpS7vqmfSeD2PpehxxF1ZdO3TBLprJlRRoSHwpAyBL59WCWSIZylQw";
  constructor(private formBuilder: FormBuilder ,private route:Router,
    private router:ActivatedRoute,private authServ:AuthService) {
    this.createLoginForm();
    this.createRegisterForm();
  }
  headers?: HttpHeaders;
  returnUrl: string;


  owlcarousel = [
    {
      title: "Welcome to Latif ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome to Latif ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome to Latif ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      mobile: [''],
      password: [''],
    })
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email:[],
      phone:[],
      name:[],
      password: [''],
      confirmPassword: [''],
      // userName: [''],
      
    })
  }


  ngOnInit() {
  
          // get return url from route parameters or default to '/'
          // this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
  }

  logInApi() {
    // console.log("login success",this.loginForm.value)
    if(!this.loginForm.valid){return;}

    this.authServ.LogInUser(this.loginForm.value).subscribe((data:any)=>{
      let token = data.headers

      console.log("heder",data.headers.keys());
      // console.log("ay 7aga");
          console.log(token);
      // localStorage.setItem('currentUser', JSON.stringify(data));
      // this.route.navigate(['dashboard/default'])

    }, err => {
      console.log('err : ', err)
    });
    

      // this.loginForm.reset()

  }

  registerApi(){

    if(!this.registerForm.valid){return;}

    console.log(this.registerForm.value);

    this.authServ.signUpUser(this.registerForm.value).subscribe(data=>{
      console.log("register success",data)

      console.log(data.response.data)
      // localStorage.setItem('tUser', JSON.stringify(data));
      // this.router.navigate(['dashboard/default'])

    }, err =>{console.log('err : ', err)});

    this.registerForm.reset()
  }


}
