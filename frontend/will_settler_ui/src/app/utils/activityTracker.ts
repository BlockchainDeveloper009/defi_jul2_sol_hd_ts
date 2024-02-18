// utils/activityTracker.ts

export function trackUserActivity(activity: string) {
    const activities = JSON.parse(localStorage.getItem('userActivities') || '[]');
    activities.push({ activity, timestamp: new Date().toISOString() });
    localStorage.setItem('userActivities', JSON.stringify(activities));
  }
  