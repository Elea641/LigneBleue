import { Link } from "react-router-dom";
import mailProfile from "../../assets/pictures/mailPhoto.png";
import Connexion from "../../assets/pictures/photo_profile.png";

function Profile() {
  return (
    <main className="mainProfile">
      <div className="titleProfile">
        <h2>Mon profil</h2>
      </div>
      <div className="photoProfile" />
      <div className="nameProfile">
        <img className="imgProfile" src={Connexion} alt="icone profile" />
        <div className="NameProfile">M Lafond Pierre</div>
      </div>
      <div className="mailProfile">
        <img className="imgMailProfile" src={mailProfile} alt="icone mail" />
        <div className="MailProfile">Lafond@gmail.com</div>
      </div>
      <div className="buttons_profile">
        <Link to="/modificationProfile">
          <button className="button_edit_my_profile" type="button">
            Modifier mon profil
          </button>
        </Link>
        <Link to="/formations/parcours">
          <button className="button_see_my_journey" type="button">
            Voir mon parcours
          </button>
        </Link>
      </div>
    </main>
  );
}
export default Profile;