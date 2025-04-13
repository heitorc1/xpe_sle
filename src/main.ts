import './style.css'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import createHeader from './components/header';
import createHero from './components/hero';
import createFeature from './components/feature';
import createTestimonial from './components/testimonial';
import createAbout from './components/about';
import createCta from './components/cta';
import createFaq from './components/faq';
import createFooter from './components/footer';

Alpine.plugin(collapse);
Alpine.start();

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(createHeader())
app.append(createHero())
app.append(createAbout())
app.append(createFeature())
app.append(createTestimonial())
app.append(createCta())
app.append(createFaq())
app.append(createFooter())