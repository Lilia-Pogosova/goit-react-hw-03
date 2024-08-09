import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
    return (
        <div className={css.container}>
            <div className={css.text}>
                <p className={css.contactIt}>
                    <FaUser className={css.contactIcon} /> {name}
                </p>

                <p className={css.contactIt}>
                    <FaPhone className={css.contactIcon} /> {number}
                </p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
};

export default Contact;