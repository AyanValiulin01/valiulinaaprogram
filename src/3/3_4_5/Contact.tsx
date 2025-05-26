import { ContactType } from './App';

export default function Contact({ 
  contact, 
  expanded, 
  onToggle 
}: { 
  contact: ContactType, 
  expanded: boolean, 
  onToggle: () => void 
}) {
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded && <p><i>{contact.email}</i></p>}
      <button onClick={onToggle}>
        {expanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
