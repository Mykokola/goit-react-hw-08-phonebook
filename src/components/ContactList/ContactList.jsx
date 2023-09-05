import { ContactListBtn, ContactListUl } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/contacts/selectors';
import { useGetContactsArryQuery,useDeleteContactMutation } from 'redux/contacts/operation';
export function ContactList() {
  const {data=[],error,isLoading} = useGetContactsArryQuery()
  const [deleteContact] = useDeleteContactMutation()
  const { filter } = useSelector(selectStatusFilter);
  const filteredContact = data.filter(e =>
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
                  deleteContact(id);
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
