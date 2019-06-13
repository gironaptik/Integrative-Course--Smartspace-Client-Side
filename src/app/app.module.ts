import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavBarComponent } from './bs-nav-bar/bs-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FormsModule } from '@angular/forms'
import { UsersService } from './services/users.service';
import { ElementsService } from './services/elements.service';
import { ActionsService } from './services/actions.service';
import { SliderComponent } from './slider/slider.component';
import { NewElementComponent} from './elements/new-element/new-element.component';
import { FindElementsComponent } from './elements/find-elements/find-elements.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateComponent } from './users/update/update.component';
import { UpdateElementComponent } from './elements/update-element/update-element.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FindRoomsComponent } from './rooms/find-rooms/find-rooms.component';
import { TablePaginationComponent } from './elements/table-pagination/table-pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    NewElementComponent,
    TablePaginationComponent,
    FindElementsComponent,
    UpdateComponent,
    UpdateElementComponent,
    IntroductionComponent,
    FindRoomsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'elements/new-element', component: NewElementComponent},
    { path: 'elements/find-element', component: FindElementsComponent},
    { path: 'elements/update-element', component: UpdateElementComponent},
    { path: 'users/login', component: LoginComponent},
    { path: 'users/register', component: RegisterComponent},
    { path: 'rooms/find-rooms', component: FindRoomsComponent},
    { path: 'introduction', component: IntroductionComponent},
    { path: 'users/update', component: UpdateComponent}
    ])
  ],
  providers: [
    UsersService,
    ElementsService,
    ActionsService,
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NgbdCarouselBasicModule {}

