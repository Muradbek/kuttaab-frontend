import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {of, take, tap} from 'rxjs';

@Component({
  selector: 'cs-bim-diagram-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements AfterViewInit {
  @ViewChild('username', { read: ElementRef })
  private _username!: ElementRef;
  @HostBinding('style') protected backgroundStyle?: string;
  @Output() public signIn: EventEmitter<any>;
  @Output() public test = new EventEmitter<number>();
  @Input() public pending: boolean | null;
  @Input() public fontSet = 'cs-icons';
  public passwordVisible: boolean;
  public loginForm: FormGroup<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.signIn = new EventEmitter();
    this.pending = false;
    this.passwordVisible = false;
    this.loginForm = formBuilder.nonNullable.group({
      user_name: '',
      password: '',
    });
  }

  public ngAfterViewInit(): void {
    this._username.nativeElement.focus();
  }

  public togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }

  public onLogin(): void {
    const payload: {
      id_module: number;
      password: string;
      user_name: string;
      platform_code: string;
    } = {
      id_module: 50,
      password: this.loginForm.controls['password'].value,
      user_name: this.loginForm.controls['user_name'].value,
      platform_code: 'PMC',
    };
    of(null).pipe(
      tap( () => {
        localStorage.setItem('debug_token', 'muradbek');
        this.router.navigate(['/']);
      })
    )
      .subscribe();
  }
}
