import Body from './components/Body';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Header from './components/Header';

function Profile() {
  return (
      <div className="App">
      <Banner/>
      <Header/>
      <Body/>
      <Footer 
        pie={<p>Copyright &copy; Todos los derechos reservados </p>}
      />
    </div>
    )
}
export default Profile;