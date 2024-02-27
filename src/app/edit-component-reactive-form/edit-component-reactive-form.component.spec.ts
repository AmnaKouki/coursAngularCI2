import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentReactiveFormComponent } from './edit-component-reactive-form.component';

describe('EditComponentReactiveFormComponent', () => {
  let component: EditComponentReactiveFormComponent;
  let fixture: ComponentFixture<EditComponentReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponentReactiveFormComponent]
    });
    fixture = TestBed.createComponent(EditComponentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
