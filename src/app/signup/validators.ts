import { FormControl, FormGroup } from '@angular/forms';

export function validateUsernameUnique(usernameInput: FormControl) {
    // this will make a request to see if the username is unique
    if (true) {
        return Promise.resolve(null);
    }
    // } else {
    //     return Promise.resolve({
    //        validateUsernameUnique: {
    //             valid: false
    //         }
    //     });
    // }

}


export function validatePasswordConfirmed(passwordsInput: FormGroup) {
    if (passwordsInput.controls.password.value === passwordsInput.controls.confirmedPassword.value) {
        return null;
    } else {
        return {
            passwordmismatch: true
        };
    }

}