import { Validators } from '@angular/forms';

export class TelefoneValidator {
      telefoneValidator = Validators.compose([
    Validators.required,
    Validators.minLength(8) ,
    Validators.pattern('[0-9]?[0-9]{4}-?[0-9]{4}')
  ])
}