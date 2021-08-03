import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SafeAreaBottomComponent } from './safe-area-bottom.component';

describe('SafeAreaBottomComponent', () => {
  let component: SafeAreaBottomComponent;
  let fixture: ComponentFixture<SafeAreaBottomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeAreaBottomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SafeAreaBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
