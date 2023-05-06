import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  matSnackBar = inject(MatSnackBar);

  openInfo(text: string, time: number = 5000) {
    this.matSnackBar.open(text, "CERRAR", { duration: time })
  }
}
