import { useEffect, useState } from 'react';

export default function Emails() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/emails')
      .then(res => res.json())
      .then(data => {
        setEmails(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📧 Correos ENA</h1>
      
      {loading && <p>Cargando...</p>}
      
      {!loading && emails.length === 0 && <p>Sin correos</p>}
      
      {emails.map(email => (
        <div key={email.id} style={{ 
          border: '1px solid #ccc', 
          padding: '15px', 
          marginBottom: '10px',
          borderRadius: '5px'
        }}>
          <h3>{email.subject}</h3>
          <p><strong>De:</strong> {email.from}</p>
          <p><strong>Resumen:</strong> {email.snippet}</p>
        </div>
      ))}
    </div>
  );
}
