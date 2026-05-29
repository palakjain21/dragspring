import { VERSION } from 'dragspring';

function App() {
  const items = [
    { id: '1', title: 'Design the API', tag: 'planning' },
    { id: '2', title: 'Build useDragEngine', tag: 'code' },
    { id: '3', title: 'Write spring solver', tag: 'code' },
    { id: '4', title: 'Add ghost trail', tag: 'polish' },
    { id: '5', title: 'Write README', tag: 'docs' },
    { id: '6', title: 'Publish v0.1.0', tag: 'release' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f0f0f', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      paddingTop: '60px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <p style={{ color: '#666', fontSize: '12px', marginBottom: '32px' }}>
        dragspring v{VERSION} — playground
      </p>
      {items.map((item) => (
        <div key={item.id} style={{
          width: '360px',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'grab',
          color: '#e0e0e0',
          fontSize: '14px',
        }}>
          <span>{item.title}</span>
          <span style={{ 
            fontSize: '11px', 
            color: '#555', 
            background: '#222', 
            padding: '2px 8px', 
            borderRadius: '4px' 
          }}>
            {item.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;