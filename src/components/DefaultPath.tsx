import { useState, useEffect } from 'react';
import { LearningActivity } from '../types';
import { getRecommendation } from '../data/activities';

/**
 * Default Path (Baseline)
 * Traditional AI recommendation system: directly shows AI-recommended learning activities, 
 * users can only accept or reject
 */
export function DefaultPath() {
  const [currentActivity, setCurrentActivity] = useState<LearningActivity | null>(null);
  const [history, setHistory] = useState<{ activity: LearningActivity; accepted: boolean }[]>([]);

  useEffect(() => {
    // Initial recommendation
    setCurrentActivity(getRecommendation());
  }, []);

  const handleAccept = () => {
    if (currentActivity) {
      setHistory([...history, { activity: currentActivity, accepted: true }]);
      setCurrentActivity(getRecommendation());
    }
  };

  const handleReject = () => {
    if (currentActivity) {
      setHistory([...history, { activity: currentActivity, accepted: false }]);
      setCurrentActivity(getRecommendation());
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '#10b981';
      case 'medium':
        return '#f59e0b';
      case 'hard':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        background: '#f9fafb',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{ marginTop: 0, color: '#1f2937' }}>Default Path (Baseline)</h2>
        <p style={{ color: '#6b7280', marginBottom: 0 }}>
          This is a traditional AI recommendation system. The AI will automatically recommend learning activities for you, 
          and you can only choose to accept or reject the recommendations.
        </p>
      </div>

      {currentActivity && (
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: 0, color: '#1f2937', fontSize: '24px' }}>
              {currentActivity.title}
            </h3>
            <span style={{
              background: getDifficultyColor(currentActivity.difficulty),
              color: 'white',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getDifficultyLabel(currentActivity.difficulty)}
            </span>
          </div>

          <div style={{
            background: '#f3f4f6',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <span style={{
              background: '#3b82f6',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {currentActivity.topic}
            </span>
            <span style={{ marginLeft: '16px', color: '#6b7280' }}>
              ⏱️ Estimated time: {currentActivity.estimatedTime} min
            </span>
          </div>

          <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }}>
            {currentActivity.description}
          </p>

          {/* Practice Exercises */}
          {currentActivity.exercises && currentActivity.exercises.length > 0 && (
            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: '#f0f9ff',
              borderRadius: '8px',
              border: '2px solid #bae6fd'
            }}>
              <h4 style={{ margin: '0 0 16px 0', color: '#0369a1', fontSize: '18px' }}>
                📝 Practice Exercises ({currentActivity.exercises.length} problems)
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentActivity.exercises.map((exercise, idx) => (
                  <div key={exercise.id} style={{
                    padding: '12px',
                    background: 'white',
                    borderRadius: '6px',
                    border: '1px solid #e0f2fe'
                  }}>
                    <div style={{ fontWeight: 'bold', color: '#0c4a6e', marginBottom: '6px' }}>
                      Problem {idx + 1}:
                    </div>
                    <div style={{ color: '#1e293b', marginBottom: '8px', fontSize: '15px' }}>
                      {exercise.question}
                    </div>
                    {exercise.hint && (
                      <div style={{
                        fontSize: '13px',
                        color: '#64748b',
                        fontStyle: 'italic',
                        marginTop: '6px',
                        paddingLeft: '12px',
                        borderLeft: '3px solid #cbd5e1'
                      }}>
                        💡 Hint: {exercise.hint}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{
            marginTop: '30px',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center'
          }}>
            <button
              onClick={handleAccept}
              style={{
                background: '#10b981',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#059669'}
              onMouseOut={(e) => e.currentTarget.style.background = '#10b981'}
            >
              ✓ Accept
            </button>
            <button
              onClick={handleReject}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'}
              onMouseOut={(e) => e.currentTarget.style.background = '#ef4444'}
            >
              ✗ Reject
            </button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <h4 style={{ marginTop: 0, color: '#1f2937' }}>History</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {history.slice().reverse().map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px',
                  background: '#f9fafb',
                  borderRadius: '6px',
                  borderLeft: `4px solid ${item.accepted ? '#10b981' : '#ef4444'}`
                }}
              >
                <span style={{ color: '#4b5563' }}>{item.activity.title}</span>
                <span style={{
                  color: item.accepted ? '#10b981' : '#ef4444',
                  fontWeight: 'bold'
                }}>
                  {item.accepted ? '✓ Accepted' : '✗ Rejected'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
