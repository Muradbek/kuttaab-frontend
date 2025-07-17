import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcome } from './nx-welcome';
import {HttpClient} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'app-remote-entry',
  providers: [HttpClient],
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntry {}
