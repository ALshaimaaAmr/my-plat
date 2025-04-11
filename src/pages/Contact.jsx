
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h1>تواصل معنا</h1>
      
      <form className="contact-form">
        <input type="text" placeholder="الاسم" required />
        <input type="email" placeholder="البريد الإلكتروني" required />
        <textarea placeholder="اكتب رسالتك هنا..." required></textarea>
        <button type="submit">إرسال</button>
      </form>

      <div className="contact-info">
        <h2>معلومات التواصل</h2>
        <p>البريد الإلكتروني: example@email.com</p>
        <p>واتساب: 01234567890</p>
        <div className="social-links">
          <a href="#" target="_blank"><FaFacebook /> فيسبوك</a>
          <a href="#" target="_blank"><FaTwitter /> تويتر</a>
          <a href="#" target="_blank"><FaInstagram /> إنستجرام</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;