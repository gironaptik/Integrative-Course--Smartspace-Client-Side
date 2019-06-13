import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavBarComponent } from './bs-nav-bar/bs-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { ElementsService } from './services/elements.service';
import { ActionsService } from './services/actions.service';
import { SliderComponent } from './slider/slider.component';
import { NewElementComponent } from './elements/new-element/new-element.component';
import { FindElementsComponent } from './elements/find-elements/find-elements.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateComponent } from './users/update/update.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
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
            UpdateComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            BrowserAnimationsModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            FormsModule,
            NgbModule.forRoot(),
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'elements/new-element', component: NewElementComponent },
                { path: 'elements/find-element', component: FindElementsComponent },
                { path: 'users/login', component: LoginComponent },
                { path: 'users/register', component: RegisterComponent },
                { path: 'users/update', component: UpdateComponent }
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
], AppModule);
export { AppModule };
export class NgbdCarouselBasicModule {
}
//# sourceMappingURL=app.module.js.map