import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeBuscaComponent } from './menu-de-busca.component';

describe('MenuDeBuscaComponent', () => {
  let component: MenuDeBuscaComponent;
  let fixture: ComponentFixture<MenuDeBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDeBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
