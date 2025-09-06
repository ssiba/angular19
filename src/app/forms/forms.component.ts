import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
//   userForms = new FormGroup({
//     name:new FormControl('',[Validators.required,]),
//     email:new FormControl('',[Validators.required,Validators.email]),
//     password:new FormControl('',[Validators.required]),
//     confirmPassword:new FormControl('',[Validators.required]),
//   },
//   { validators: this.passwordValidation.bind(this) }

// )

// passwordValidation(form:AbstractControl){
// const password = form.get('password')?.value;
// const confirmPassword = form.get('confirmPassword')?.value;
// if(password!==confirmPassword){
// form.get('confirmPassword')?.setErrors({mismatch:true});
// return { mismatch: true };
// } else {
//   return null;
// }
// }
//   onSubmit(){
//     if (this.userForms.valid) {
//       console.log('Form Submitted!', this.userForms.value);
//     } else {
//       console.log('Form is invalid');
//     }
//   }
userForms: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForms = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.userForms.valid) {
      console.log('Form Submitted', this.userForms.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper method to check if a field is invalid and touched
  isFieldInvalid(field: string): boolean {
    const control = this.userForms.get(field);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}
