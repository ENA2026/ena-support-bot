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

  const getCategoryColor = (category) => {
    if (category === 'SIMPLE') return '#90EE90';
    if (category === 'COMPLEJO') return '#FFD700';
    if (category === 'CRÍTICO') return '#FF6B6B';
    return '#DDD';
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '900px', margin: '0 auto' }}>
      <h1>📧 Correos ENA - Analizados con Claude</h1>
      
      {loading && <p>Cargando correos...</p>}
      
      {!loading && emails.length === 0 && <p>Sin correos</p>}
      
      {emails.map(email => (
        <div key={email.id} style={{ 
          border: '1px solid #ccc', 
          padding: '15px', 
          marginBottom: '15px',
          borderRadius: '5px',
          backgroundColor: getCategoryColor(email.category)
        }}>
          <h3>{email.subject}</h3>
          <p><strong>De:</strong> {email.from}</p>
          <p><strong>Resumen:</strong> {email.snippet}</p>
          <p><strong>Categoría:</strong> {email.category}</p>
        </div>
      ))}
    </div>
  );
}
