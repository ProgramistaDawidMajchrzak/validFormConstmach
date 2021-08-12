
import './App.css';
import Header from './components/Header.js';
import FormElement from './components/FormElement.js';

function App() {
  return (
    <div className="container">
      <Header />
      <form action="">
        <FormElement labelType={'Nazwa firmy'} inputType={'text'} inputPlaceholder={'Proszę podać nazwę firmy'} />
        <FormElement labelType={'Imię'} inputType={'text'} inputPlaceholder={'Proszę podać imię'} />
        <FormElement labelType={'Nazwisko'} inputType={'text'} inputPlaceholder={'Proszę podać nazwisko'} />
        <FormElement labelType={'Telefon'} inputType={'text'} inputPlaceholder={'Proszę podać numer telefonu'} />
        <FormElement labelType={'Email'} inputType={'text'} inputPlaceholder={'Proszę podać adres email'} />
        <FormElement labelType={'Lokalizacja węzła'} inputType={'text'} inputPlaceholder={'Proszę podać lokalizację węzła'} />
        <FormElement labelType={'Typ węzła'} inputType={'text'} inputPlaceholder={'Proszę podać typ węzła (np. compact, mobicom)'} />
        <div className="form-box">
          <label htmlFor="Opis szkody">Opis szkody</label>
          <textarea name="" id="Opis szkody" cols="30" rows="20" placeholder='Proszę podać informację na temat usterki'></textarea>
        </div>
        <div className="check-box">
          <input type="checkbox" />
          <p>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustwą o ochronie danych osobowych w związku z (np. wysyłaniem zapytania przez formularz kontaktowy). Podanie danych jest dobrowolne ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawienia, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Constmach Partner Sp. z o. o.</p>
        </div>
        <button type="submit">Wyślij</button>
      </form>
      <footer><a href="https://constmachpartner.pl/">constmachpartner.pl</a></footer>
    </div>
  );
}

export default App;
