import { MySnotifyServiceService } from './../../../shared/services/my-snotify-service.service';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: User = new User();

  success: boolean = false;

  constructor(private router: Router, private fuckOffsService: FuckOffsService, private mySnotifyServiceService: MySnotifyServiceService) { }

  onClickShitButton(): void {
    this.fuckOffsService.fuckYou(this.user.id)
      .subscribe(
        (fuckOff: FuckOff) => {
          this.mySnotifyServiceService.onSuccess();
          this.router.navigate([`/destinies/${fuckOff.id}`]);
          this.success = true;
        }
      )
  }

}
