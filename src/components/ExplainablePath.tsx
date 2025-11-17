import { useState, useEffect } from 'react';
import { LearningActivity, Explanation } from '../types';
import { getRecommendation, getActivityStats } from '../data/activities';

/**
 * Explainable Path
 * Explainable path: AI not only recommends learning activities but also explains why, 
 * showing the decision-making process
 */
export function ExplainablePath() {
  const [currentActivity, setCurrentActivity] = useState<LearningActivity | null>(null);
  const [showExplanation, setShowExplanation] = useState(true);
  const [explanations, setExplanations] = useState<Explanation[]>([]);
  const [acceptedCount, setAcceptedCount] = useState(0);

  useEffect(() => {
    generateRecommendation();
  }, []);

  const generateRecommendation = () => {
    const activity = getRecommendation();
    setCurrentActivity(activity);
    setShowExplanation(true);

    // Generate explanation information
    const newExplanations: Explanation[] = [
      {
        title: 'Recommendation Rationale',
        content: `Based on your current learning progress and historical performance, we believe "${activity.title}" is the most suitable next learning content for you.`,
        type: 'reasoning',
      },
      {
        title: 'Difficulty Matching Analysis',
        content: `This activity has a ${activity.difficulty} difficulty level. According to your past learning records, this difficulty level will best help you grow through challenges while not feeling overly pressured.`,
        type: 'data',
      },
      {
        title: 'Time Planning',
        content: `This activity is estimated to take ${activity.estimatedTime} minutes to complete, which fits your average study duration. It's recommended to study when you're energetic for the best results.`,
        type: 'algorithm',
      },
      {
        title: 'Knowledge Connection',
        content: `"${activity.title}" belongs to the ${activity.topic} topic. ${getTopicExplanation(activity.topic)} This will help you build a complete knowledge system.`,
        type: 'reasoning',
      },
    ];

    // Add personalized explanation
    if (acceptedCount > 0) {
      newExplanations.push({
        title: 'Learning Path Optimization',
        content: `You have completed ${acceptedCount} learning activities with excellent performance! Based on your learning patterns, we've adjusted our recommendation algorithm to better match your learning pace.`,
        type: 'algorithm',
      });
    }

    setExplanations(newExplanations);
  };

  const getTopicExplanation = (topic: string) => {
    switch (topic) {
      case 'Algebra':
        return 'Algebra is the foundation of mathematics, and mastering algebraic operations is crucial for subsequent learning.';
      case 'Functions':
        return 'Functions are the bridge connecting algebra and calculus, an important tool for understanding mathematical relationships.';
      case 'Limits':
        return 'Limits are the core concept of calculus. Understanding limits will lay a solid foundation for learning derivatives and integrals.';
      default:
        return 'This is an important topic in mathematics learning.';
    }
  };

  const handleAccept = () => {
    setAcceptedCount(acceptedCount + 1);
    setTimeout(() => {
      generateRecommendation();
    }, 300);
  };

  const handleReject = () => {
    generateRecommendation();
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

  const getExplanationIcon = (type: string) => {
    switch (type) {
      case 'reasoning':
        return '🧠';
      case 'data':
        return '📊';
      case 'algorithm':
        return '⚙️';
      default:
        return '💡';
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{
        background: '#fef3c7',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #fcd34d'
      }}>
        <h2 style={{ marginTop: 0, color: '#78350f' }}>Explainable Path (Transparent AI)</h2>
        <p style={{ color: '#92400e', marginBottom: 0 }}>
          In this mode, the AI not only recommends learning activities but also provides detailed explanations 
          of the reasons, data evidence, and decision-making process, allowing you to fully understand how the AI thinks.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Recommendation Card */}
        <div style={{ flex: '1 1 400px' }}>
          {currentActivity && (
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '20px'
              }}>
                <h3 style={{ margin: 0, color: '#1f2937', fontSize: '22px' }}>
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
                  background: '#8b5cf6',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {currentActivity.topic}
                </span>
                <span style={{ marginLeft: '16px', color: '#6b7280' }}>
                  ⏱️ {currentActivity.estimatedTime} minutes
                </span>
              </div>

              <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }}>
                {currentActivity.description}
              </p>

              {/* Practice Exercises */}
              {currentActivity.exercises && currentActivity.exercises.length > 0 && (
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  background: '#fef3c7',
                  borderRadius: '8px',
                  border: '2px solid #fbbf24'
                }}>
                  <h4 style={{ margin: '0 0 12px 0', color: '#92400e', fontSize: '16px' }}>
                    📝 Included Practice Problems ({currentActivity.exercises.length})
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {currentActivity.exercises.slice(0, 3).map((exercise, idx) => (
                      <div key={exercise.id} style={{
                        padding: '10px',
                        background: '#ffffff',
                        borderRadius: '6px',
                        border: '1px solid #fde68a'
                      }}>
                        <div style={{ fontWeight: 'bold', color: '#78350f', fontSize: '13px', marginBottom: '4px' }}>
                          Problem {idx + 1}:
                        </div>
                        <div style={{ color: '#1e293b', fontSize: '14px', marginBottom: '6px' }}>
                          {exercise.question}
                        </div>
                        {exercise.hint && (
                          <div style={{
                            fontSize: '12px',
                            color: '#64748b',
                            fontStyle: 'italic',
                            paddingLeft: '10px',
                            borderLeft: '2px solid #cbd5e1'
                          }}>
                            💡 {exercise.hint}
                          </div>
                        )}
                      </div>
                    ))}
                    {currentActivity.exercises.length > 3 && (
                      <div style={{
                        textAlign: 'center',
                        color: '#92400e',
                        fontSize: '13px',
                        fontStyle: 'italic',
                        marginTop: '4px'
                      }}>
                        + {currentActivity.exercises.length - 3} more problems...
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '24px', marginBottom: '20px' }}>
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  style={{
                    width: '100%',
                    background: '#f3f4f6',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {showExplanation ? 'Hide' : 'Show'} AI Explanation 
                  <span style={{ fontSize: '12px' }}>
                    {showExplanation ? '▼' : '▶'}
                  </span>
                </button>
              </div>

              <div style={{
                marginTop: '20px',
                display: 'flex',
                gap: '12px'
              }}>
                <button
                  onClick={handleAccept}
                  style={{
                    flex: 1,
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
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
                    flex: 1,
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#ef4444'}
                >
                  ✗ Try Another
                </button>
              </div>

              {acceptedCount > 0 && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: '#d1fae5',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ margin: 0, color: '#065f46', fontWeight: 'bold' }}>
                    🎉 Completed {acceptedCount} learning {acceptedCount === 1 ? 'activity' : 'activities'}!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Explanation Panel */}
        {showExplanation && (
          <div style={{ flex: '1 1 400px' }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2px solid #fbbf24'
            }}>
              <h3 style={{
                marginTop: 0,
                color: '#92400e',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                💡 AI Decision Explanation
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {explanations.map((explanation, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      background: '#fffbeb',
                      borderRadius: '8px',
                      border: '1px solid #fde68a',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <span style={{ fontSize: '20px' }}>
                        {getExplanationIcon(explanation.type)}
                      </span>
                      <h4 style={{ margin: 0, color: '#78350f', fontSize: '16px' }}>
                        {explanation.title}
                      </h4>
                    </div>
                    <p style={{
                      margin: 0,
                      color: '#92400e',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {explanation.content}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: '#e0e7ff',
                borderRadius: '8px',
                border: '1px solid #a5b4fc'
              }}>
                <h4 style={{ marginTop: 0, color: '#3730a3', fontSize: '14px' }}>
                  📈 Recommendation Confidence Analysis
                </h4>
                <div style={{ marginBottom: '8px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                    fontSize: '13px',
                    color: '#4338ca'
                  }}>
                    <span>Content Match</span>
                    <span>92%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#c7d2fe',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '92%',
                      height: '100%',
                      background: '#6366f1',
                      transition: 'width 0.5s'
                    }} />
                  </div>
                </div>

                <div style={{ marginBottom: '8px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                    fontSize: '13px',
                    color: '#4338ca'
                  }}>
                    <span>Difficulty Fit</span>
                    <span>85%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#c7d2fe',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '85%',
                      height: '100%',
                      background: '#6366f1',
                      transition: 'width 0.5s'
                    }} />
                  </div>
                </div>

                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                    fontSize: '13px',
                    color: '#4338ca'
                  }}>
                    <span>Time Suitability</span>
                    <span>88%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#c7d2fe',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '88%',
                      height: '100%',
                      background: '#6366f1',
                      transition: 'width 0.5s'
                    }} />
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '20px',
                padding: '12px',
                background: '#f0fdf4',
                borderRadius: '8px',
                border: '1px solid #86efac'
              }}>
                <p style={{
                  margin: '0 0 8px 0',
                  fontSize: '12px',
                  color: '#065f46',
                  fontWeight: 'bold'
                }}>
                  📚 Database Statistics
                </p>
                <p style={{
                  margin: 0,
                  fontSize: '11px',
                  color: '#047857',
                  lineHeight: '1.6'
                }}>
                  Total Activities: {getActivityStats().total} | 
                  Topics: {Object.keys(getActivityStats().byTopic).length} | 
                  Practice Problems: {getActivityStats().totalExercises} | 
                  Avg Time: {getActivityStats().averageTime} min
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
