import { ContactListBtn, ContactListUl } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operation';
import { selectStatusFilter } from 'redux/contacts/selectors';
export function ContactList() {
  const dispatch = useDispatch();

  const { filter } = useSelector(selectStatusFilter);
  const contactList = useSelector(selectContact);
  const filteredContact = contactList.filter(e =>
    e.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <>
      <ContactListUl>
        {filteredContact.map(({ id, name, Number }) => {
          return (
            <li key={id}>
              {name} : {Number}
              <ContactListBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                  //  dispatch(fetchContact())
                }}
              >
                delete
              </ContactListBtn>
            </li>
          );
        })}
      </ContactListUl>
    </>
  );
}
