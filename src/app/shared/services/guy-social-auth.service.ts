import {inject, Injectable} from '@angular/core';
import {SocialAuthService, GoogleLoginProvider} from "@abacritt/angularx-social-login";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuySocialAuthService {

  // private socialAuthService = inject(SocialAuthService);

  signinWithGoogle() {
    // return from(this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID));
  }
}
