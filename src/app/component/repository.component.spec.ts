import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryComponent } from './repository.component';
import { HttpClientModule } from '@angular/common/http';

describe('RepositoriesComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepositoryComponent,
      ],
      imports: [
        HttpClientModule,
      ],
    });
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
