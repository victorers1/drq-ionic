import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRequisicaoDadoPage } from './edit-requisicao-dado.page';

describe('EditRequisicaoDadoPage', () => {
  let component: EditRequisicaoDadoPage;
  let fixture: ComponentFixture<EditRequisicaoDadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRequisicaoDadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRequisicaoDadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
