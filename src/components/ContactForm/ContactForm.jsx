import React from 'react';
import { FormTitle, FormContact, FormButton } from './ContactForm.Styled';
import { useForm } from 'react-hook-form';
import { useSetContactMutation } from 'redux/contacts/operation';
import { useGetContactsArryQuery } from 'redux/contacts/operation';
export function ContactForm() {
  const { data,refetch } = useGetContactsArryQuery();
  const [setContact] = useSetContactMutation();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    mode: 'onTouched',
  });

  const submitForm = dataForm => {
    const { name, number } = dataForm;
    const loverName = dataForm.name.toLowerCase();
    if (data.find(item => item.name.toLowerCase() === loverName)) {
      console.log('this name already exists');
    } else setContact({ name, number });
    reset();
  };

  return (
    <>
      <FormTitle>Phone Book</FormTitle>
      <FormContact onSubmit={handleSubmit(submitForm)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            {...register('name')}
          />
        </label>
        <label>
          Tel:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            {...register('number')}
          />
        </label>
        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    </>
  );
}
