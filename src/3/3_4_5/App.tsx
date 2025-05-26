// 3_4_5 Fix misplaced state in the list 
/*
  В этом списке каждый Contact имеет состояние, которое определяет, была ли для него нажата галочка "Показать почту". Нажмите "Показать почту" для Алисы, а затем установите флажок "Показывать в обратном порядке". Вы заметите, что письмо Тейлора теперь развернуто, а письмо Алисы, которое переместилось в самый низ, кажется свернутым.

  Исправьте это так, чтобы развернутое состояние было связано с каждым контактом, независимо от выбранного порядка.
*/

import { useState } from 'react';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);
  const [expandedContacts, setExpandedContacts] = useState<{ [key: number]: boolean }>({});

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  function toggleExpanded(id: number) {
    setExpandedContacts(prev => ({
      ...prev,
      [id]: !prev[id] // Переключаем состояние конкретного контакта
    }));
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={e => setReverse(e.target.checked)}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(contact =>
          <li key={contact.id}>
            <Contact
              contact={contact}
              expanded={!!expandedContacts[contact.id]}
              onToggle={() => toggleExpanded(contact.id)}
            />
          </li>
        )}
      </ul>
    </>
  );
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
};

const contacts: ContactType[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
