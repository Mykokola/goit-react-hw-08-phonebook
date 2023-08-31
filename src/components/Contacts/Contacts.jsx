import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactListFilter } from 'components/ContactListFilter/ContactListFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from 'redux/contacts/operation';
export const Contacts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContact());
    }, [dispatch]);
  return (
    <>
      <ContactForm />
      <ContactListFilter />
      <ContactList />
    </>
  );
};
