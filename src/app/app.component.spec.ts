import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should return true if the form is invalid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    const email = app.form.controls['email']
    email.setValue('norealemail@gmail.com')

    expect(app.form.invalid).toBeTrue();
  });

  it('Should return false if the form is valid.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let email = app.form.controls['email']
    let password = app.form.controls['password']

    email.setValue('norealemail@gmail.com')
    password.setValue('123456')

    expect(app.form.invalid).toBeFalse();
  });
});
