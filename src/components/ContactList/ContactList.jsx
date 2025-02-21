import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

const ContactList = ({contacts, handleDeleteContact}) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} handleDeleteContact={handleDeleteContact} />
          </li>
        ))}
      </ul>
    </div>
        
  );
}

export default ContactList