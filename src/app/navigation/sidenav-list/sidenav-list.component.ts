import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>()
  isAuth: boolean
  authSubscription: Subscription

  @Output() closeSidenav = new EventEmitter<void>()

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange
    .subscribe(
      authStatus => {
        this.isAuth = authStatus
      }
    )
  }

  onLogout(){
    this.authService.logout()
    this.onClose()
  }

  onClose(){
    this.closeSidenav.emit()
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe()
  }

}
