import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TermsAndConditionsComponent } from './Terms&Conditions/terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './FAQ-Folder/faq/faq.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blogs', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: 'FAQ', component: FaqComponent}
];
