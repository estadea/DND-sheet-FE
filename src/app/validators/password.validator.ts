import {AbstractControl, ValidatorFn} from "@angular/forms";
import {User} from "../model/user";

export namespace CustomValidator {
  export const passwordRequired = (user?: User): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (user) {
        return null
      } else {
        if (!control.value) {
          return {'required': true};
        }
        return null
      }
    };
  }
}
