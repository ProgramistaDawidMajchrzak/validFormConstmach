import emailjs from 'emailjs-com';
import './App.css';
import Header from './components/Header.js';
import FormElement from './components/FormElement.js';

function App() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fa2r0jy', 'template_7ctey1i', e.target, 'user_L1OauPxwE4IkKaDjV2sYM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="container">
      <Header />
      <form action="" onSubmit={sendEmail}>
        <FormElement labelType={'Nazwa firmy'} inputType={'text'} inputPlaceholder={'Proszę podać nazwę firmy'} name={'Firma'} />
        <FormElement labelType={'Imię'} inputType={'text'} inputPlaceholder={'Proszę podać imię'} name={'Imie'} />
        <FormElement labelType={'Nazwisko'} inputType={'text'} inputPlaceholder={'Proszę podać nazwisko'} name={'Nazwisko'} />
        <FormElement labelType={'Telefon'} inputType={'text'} inputPlaceholder={'Proszę podać numer telefonu'} name={'Telefon'} />
        <FormElement labelType={'Email'} inputType={'text'} inputPlaceholder={'Proszę podać adres email'} name={'Email'} />
        <FormElement labelType={'Lokalizacja węzła'} inputType={'text'} inputPlaceholder={'Proszę podać lokalizację węzła'} name={'Loaklizacja'} />
        <FormElement labelType={'Typ węzła'} inputType={'text'} inputPlaceholder={'Proszę podać typ węzła (np. compact, mobicom)'} name={'Typ'} />
        <div className="form-box">
          <label htmlFor="Opis szkody">Opis szkody</label>
          <textarea name="" id="Opis szkody" cols="30" rows="20" placeholder='Proszę podać informację na temat usterki' name="Opis" ></textarea>
        </div>
        <div className="check-box">
          <input type="checkbox" />
          <p>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustwą o ochronie danych osobowych w związku z (np. wysyłaniem zapytania przez formularz kontaktowy). Podanie danych jest dobrowolne ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawienia, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Constmach Partner Sp. z o. o.</p>
        </div>
        <input className='form-submit-btn' type="submit" value='Wyślij' />
      </form>
      <footer><a href="https://constmachpartner.pl/">constmachpartner.pl</a></footer>
    </div>
  );
}

export default App;
