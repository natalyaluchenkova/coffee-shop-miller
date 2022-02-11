import Header from '../layout/Header';
import '../../css/blog-contacts.css';
import TelegramBot from '../layout/TelegramBot';

export default function ContactPage() {
  return <>
    <Header />
    <div className='contactBlock'>
      <div className='contactData'>
        <div>
            <h2>Связаться с нами:</h2>
            <p>+38(097)777-77-77</p>
            <p>miller.coffee@mail.com</p>
        </div>
        <div>
            <h2>Юридический адрес:</h2>
            <p>Украина, 54000, г.Николаев <br /> ул.Советская, 15, офис 556</p>            
        </div>
        <div>
            <h2>Адрес склада:</h2>            
            <p>Украина, 54000, г.Николаев <br /> ул.Советская, 15, офис 556</p>
        </div>
      </div>        
      <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5444.902286946619!2d31.987247079502136!3d46.97247286659071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c97741634373%3A0x109ad16f7ee5ae03!2z0KHQvtCx0L7RgNC90LAg0L_Qu9C-0YnQsA!5e0!3m2!1sru!2snz!4v1644266664837!5m2!1sru!2snz" width="900" height="500" allowfullscreen="" loading="lazy"></iframe></div>
    </div>    
    </>;
}
