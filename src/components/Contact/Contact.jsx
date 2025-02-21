import css from "./Contact.module.css"
import { BiSolidUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

const Contact = ({id, name, number, handleDeleteContact}) => {
  return (
    <div className={css.container}>
          <div className={css.contact}>
              <p className={css.name}>
                  <BiSolidUser className={css.icon} size="20"/>
                  {name}</p>
              <p className={css.number}>
                  <BiPhone className={css.icon} size="20"/>
                  {number}
              </p>
         </div>
          <button onClick={() => handleDeleteContact(id)} className={css.button}>
              Delete
          </button>
   </div>
  )
}

export default Contact