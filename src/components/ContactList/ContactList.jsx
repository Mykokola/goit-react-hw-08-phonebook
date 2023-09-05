import { ContactListBtn, ContactListUl } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operation';
import { selectStatusFilter } from 'redux/contacts/selectors';
import { useGetContactsArryQuery } from 'redux/contacts/operation';
export function ContactList() {
  const {data,error,isLoading} = useGetContactsArryQuery()
  const s = useSelector(selectContact)
  console.log(useGetContactsArryQuery())
  console.log(s)
  const dispatch = useDispatch();
  const { filter } = useSelector(selectStatusFilter);
  const contactList = useSelector(selectContact);
  const filteredContact = contactList.filter(e =>
    e.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <>
      <ContactListUl>
        {filteredContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} : {number}
              <ContactListBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
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
