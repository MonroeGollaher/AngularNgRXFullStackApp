import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSidenavModule } from '@angular/material/sidenav/'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'



@NgModule({
  imports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ]
})

export class MaterialModule {}
