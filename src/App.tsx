import { useState } from 'react';
import { PrototypeType } from './types';
import { DefaultPath } from './components/DefaultPath';
import { CoCreationPath } from './components/CoCreationPath';
import { ExplainablePath } from './components/ExplainablePath';
import './App.css';

function App() {
  const [activePrototype, setActivePrototype] = useState<PrototypeType>('default');

  const prototypes: { type: PrototypeType; name: string; description: string; icon: string; color: string }[] = [
    {
      type: 'default',
      name: 'Default Path',
      description: 'Traditional AI Recommendation',
      icon: '🤖',
      color: '#6b7280'
    },
    {
      type: 'co-creation',
      name: 'Co-Creation Path',
      description: 'Collaborative Learning Plan',
      icon: '🤝',
      color: '#3b82f6'
    },
    {
      type: 'explainable',
      name: 'Explainable Path',
      description: 'Transparent AI Decisions',
      icon: '💡',
      color: '#f59e0b'
    }
  ];

  const renderPrototype = () => {
    switch (activePrototype) {
      case 'default':
        return <DefaultPath />;
      case 'co-creation':
        return <CoCreationPath />;
      case 'explainable':
        return <ExplainablePath />;
      default:
        return <DefaultPath />;
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          margin: '0 0 10px 0',
          fontSize: '36px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          🎓 AI Learning Coach Lab
        </h1>
        <p style={{
          margin: 0,
          fontSize: '18px',
          opacity: 0.95
        }}>
          Explore Three Different AI Learning Coach Prototypes - HCI Research Project
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        background: 'white',
        borderBottom: '2px solid #e5e7eb',
        padding: '0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '0'
        }}>
          {prototypes.map((prototype) => (
            <button
              key={prototype.type}
              onClick={() => setActivePrototype(prototype.type)}
              style={{
                flex: 1,
                padding: '20px',
                border: 'none',
                background: activePrototype === prototype.type ? prototype.color : 'transparent',
                color: activePrototype === prototype.type ? 'white' : '#4b5563',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: activePrototype === prototype.type ? 'bold' : 'normal',
                transition: 'all 0.3s',
                borderBottom: activePrototype === prototype.type ? 'none' : '3px solid transparent',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (activePrototype !== prototype.type) {
                  e.currentTarget.style.background = '#f9fafb';
                  e.currentTarget.style.borderBottom = `3px solid ${prototype.color}`;
                }
              }}
              onMouseLeave={(e) => {
                if (activePrototype !== prototype.type) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderBottom = '3px solid transparent';
                }
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '28px' }}>{prototype.icon}</span>
                <span style={{ fontSize: '16px' }}>{prototype.name}</span>
                <span style={{
                  fontSize: '12px',
                  opacity: activePrototype === prototype.type ? 1 : 0.7
                }}>
                  {prototype.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        minHeight: 'calc(100vh - 300px)',
        background: '#f9fafb',
        paddingBottom: '40px'
      }}>
        {renderPrototype()}
      </main>

      {/* Footer */}
      <footer style={{
        background: '#1f2937',
        color: '#9ca3af',
        padding: '30px 20px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
          🔬 COSC 267 - Human-Computer Interaction Final Project
        </p>
        <p style={{ margin: 0, fontSize: '13px', opacity: 0.8 }}>
          Comparing the impact of different AI interaction design patterns on learning experience
        </p>
        <div style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: '12px' }}>
            <strong>Default:</strong> Basic AI recommendation
          </div>
          <div style={{ fontSize: '12px' }}>
            <strong>Co-Creation:</strong> User-driven design
          </div>
          <div style={{ fontSize: '12px' }}>
            <strong>Explainable:</strong> Transparent decision process
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
