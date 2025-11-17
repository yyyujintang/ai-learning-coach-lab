import { useState } from 'react';
import { LearningActivity, UserPreference } from '../types';
import { learningActivities } from '../data/activities';

/**
 * Co-Creation Path
 * Collaborative creation path: users can set preferences and work with AI to determine learning plans
 */
export function CoCreationPath() {
  const [step, setStep] = useState<'preferences' | 'results'>('preferences');
  const [preferences, setPreferences] = useState<UserPreference>({
    topics: [],
    difficulty: 'medium',
    timeAvailable: 30,
  });
  const [recommendations, setRecommendations] = useState<LearningActivity[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set());

  // All available topics
  const allTopics = Array.from(new Set(learningActivities.map(a => a.topic)));

  const handleTopicToggle = (topic: string) => {
    const newTopics = preferences.topics.includes(topic)
      ? preferences.topics.filter(t => t !== topic)
      : [...preferences.topics, topic];
    setPreferences({ ...preferences, topics: newTopics });
  };

  const handleGenerateRecommendations = () => {
    // Generate multiple recommendations based on user preferences
    const filtered = learningActivities.filter(activity => {
      const topicMatch = preferences.topics.length === 0 || preferences.topics.includes(activity.topic);
      const difficultyMatch = activity.difficulty === preferences.difficulty;
      const timeMatch = activity.estimatedTime <= preferences.timeAvailable;
      return topicMatch && difficultyMatch && timeMatch;
    });

    // If no perfect matches, relax criteria
    if (filtered.length === 0) {
      const relaxed = learningActivities.filter(activity => {
        const topicMatch = preferences.topics.length === 0 || preferences.topics.includes(activity.topic);
        return topicMatch;
      });
      setRecommendations(relaxed.slice(0, 5));
    } else {
      setRecommendations(filtered.slice(0, 5));
    }

    setStep('results');
  };

  const handleActivityToggle = (activityId: string) => {
    const newSelected = new Set(selectedActivities);
    if (newSelected.has(activityId)) {
      newSelected.delete(activityId);
    } else {
      newSelected.add(activityId);
    }
    setSelectedActivities(newSelected);
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
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{
        background: '#f0f9ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #bae6fd'
      }}>
        <h2 style={{ marginTop: 0, color: '#0c4a6e' }}>Co-Creation Path (Collaborative)</h2>
        <p style={{ color: '#075985', marginBottom: 0 }}>
          In this mode, you can set your learning preferences, and the AI will generate multiple recommendations 
          based on your preferences. You can choose the most suitable learning activities from them.
        </p>
      </div>

      {step === 'preferences' && (
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginTop: 0, color: '#1f2937' }}>Set Your Learning Preferences</h3>

          {/* Topic Selection */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '12px', color: '#374151', fontWeight: 'bold' }}>
              Topics of Interest (multiple selection):
            </label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {allTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => handleTopicToggle(topic)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: preferences.topics.includes(topic) ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                    background: preferences.topics.includes(topic) ? '#dbeafe' : 'white',
                    color: preferences.topics.includes(topic) ? '#1e40af' : '#6b7280',
                    cursor: 'pointer',
                    fontWeight: preferences.topics.includes(topic) ? 'bold' : 'normal',
                    transition: 'all 0.2s'
                  }}
                >
                  {preferences.topics.includes(topic) ? '✓ ' : ''}{topic}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '12px', color: '#374151', fontWeight: 'bold' }}>
              Difficulty Level:
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              {(['easy', 'medium', 'hard'] as const).map(level => (
                <button
                  key={level}
                  onClick={() => setPreferences({ ...preferences, difficulty: level })}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: preferences.difficulty === level ? '2px solid ' + getDifficultyColor(level) : '2px solid #e5e7eb',
                    background: preferences.difficulty === level ? getDifficultyColor(level) : 'white',
                    color: preferences.difficulty === level ? 'white' : '#6b7280',
                    cursor: 'pointer',
                    fontWeight: preferences.difficulty === level ? 'bold' : 'normal',
                    transition: 'all 0.2s',
                    flex: 1
                  }}
                >
                  {getDifficultyLabel(level)}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '12px', color: '#374151', fontWeight: 'bold' }}>
              Available Study Time: {preferences.timeAvailable} minutes
            </label>
            <input
              type="range"
              min="15"
              max="60"
              step="5"
              value={preferences.timeAvailable}
              onChange={(e) => setPreferences({ ...preferences, timeAvailable: parseInt(e.target.value) })}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                outline: 'none',
                accentColor: '#3b82f6'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>
              <span>15 min</span>
              <span>60 min</span>
            </div>
          </div>

          <button
            onClick={handleGenerateRecommendations}
            style={{
              width: '100%',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.background = '#3b82f6'}
          >
            Generate Recommendations 🎯
          </button>
        </div>
      )}

      {step === 'results' && (
        <>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ marginTop: 0, color: '#1f2937' }}>Based on your preferences, the AI recommends:</h3>
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>
              Please select the activities you want to study (multiple selection allowed):
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recommendations.map(activity => (
                <div
                  key={activity.id}
                  onClick={() => handleActivityToggle(activity.id)}
                  style={{
                    padding: '20px',
                    borderRadius: '8px',
                    border: selectedActivities.has(activity.id) ? '3px solid #3b82f6' : '2px solid #e5e7eb',
                    background: selectedActivities.has(activity.id) ? '#eff6ff' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <span style={{
                          fontSize: '20px',
                          color: selectedActivities.has(activity.id) ? '#3b82f6' : '#9ca3af'
                        }}>
                          {selectedActivities.has(activity.id) ? '☑' : '☐'}
                        </span>
                        <h4 style={{ margin: 0, color: '#1f2937' }}>{activity.title}</h4>
                      </div>
                      <p style={{ color: '#6b7280', margin: '0 0 8px 32px' }}>{activity.description}</p>
                      
                      {/* Exercise Preview - shown when activity is selected */}
                      {selectedActivities.has(activity.id) && activity.exercises && activity.exercises.length > 0 && (
                        <div style={{
                          margin: '12px 0 0 32px',
                          padding: '16px',
                          background: '#f0f9ff',
                          borderRadius: '8px',
                          border: '2px solid #3b82f6'
                        }}>
                          <h5 style={{ margin: '0 0 12px 0', color: '#1e40af', fontSize: '15px' }}>
                            📝 Practice Problems ({activity.exercises.length})
                          </h5>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {activity.exercises.map((exercise, idx) => (
                              <div key={exercise.id} style={{
                                padding: '12px',
                                background: 'white',
                                borderRadius: '6px',
                                border: '1px solid #bfdbfe'
                              }}>
                                <div style={{ fontWeight: 'bold', color: '#1e40af', marginBottom: '6px', fontSize: '14px' }}>
                                  Problem {idx + 1}:
                                </div>
                                <div style={{ color: '#1e293b', marginBottom: '8px', fontSize: '14px' }}>
                                  {exercise.question}
                                </div>
                                {exercise.hint && (
                                  <div style={{
                                    fontSize: '13px',
                                    color: '#64748b',
                                    fontStyle: 'italic',
                                    marginTop: '6px',
                                    paddingLeft: '12px',
                                    borderLeft: '3px solid #93c5fd'
                                  }}>
                                    💡 Hint: {exercise.hint}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Exercise count badge - shown when activity is not selected */}
                      {!selectedActivities.has(activity.id) && activity.exercises && activity.exercises.length > 0 && (
                        <div style={{
                          margin: '0 0 0 32px',
                          padding: '8px 12px',
                          background: '#f0f9ff',
                          borderRadius: '6px',
                          display: 'inline-block'
                        }}>
                          <span style={{ color: '#0369a1', fontSize: '13px', fontWeight: '500' }}>
                            📝 {activity.exercises.length} practice problems included
                          </span>
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                      <span style={{
                        background: getDifficultyColor(activity.difficulty),
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {getDifficultyLabel(activity.difficulty)}
                      </span>
                      <span style={{ color: '#6b7280', fontSize: '14px' }}>
                        ⏱️ {activity.estimatedTime} min
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '30px', display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep('preferences')}
                style={{
                  flex: 1,
                  background: '#6b7280',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                ← Reset Preferences
              </button>
              <button
                onClick={() => alert(`You've selected ${selectedActivities.size} learning activities!`)}
                disabled={selectedActivities.size === 0}
                style={{
                  flex: 1,
                  background: selectedActivities.size > 0 ? '#10b981' : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: selectedActivities.size > 0 ? 'pointer' : 'not-allowed'
                }}
              >
                Confirm Learning Plan ✓
              </button>
            </div>
          </div>

          {selectedActivities.size > 0 && (
            <div style={{
              background: '#d1fae5',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #10b981',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, color: '#065f46', fontWeight: 'bold' }}>
                {selectedActivities.size} activities selected, estimated total time: {' '}
                {recommendations
                  .filter(a => selectedActivities.has(a.id))
                  .reduce((sum, a) => sum + a.estimatedTime, 0)} minutes
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
