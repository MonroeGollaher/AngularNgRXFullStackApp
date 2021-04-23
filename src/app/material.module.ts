import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from "@angular/material/datepicker"



@NgModule({
  imports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})

export class MaterialModule {}
