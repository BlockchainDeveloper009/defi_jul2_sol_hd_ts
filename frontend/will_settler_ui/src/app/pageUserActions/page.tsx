// pages/UserActivitiesPage.tsx

import { useEffect, useState } from 'react';

function UserActivitiesPage() {
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    const activities = JSON.parse(localStorage.getItem('userActivities') || '[]');
    setUserActivities(activities);
  }, []);

  return (
    <div>
      <h1>User Activities</h1>
      <ul>
        {userActivities.map((activity, index) => (
          <li key={index}>{activity.activity} - {activity.timestamp}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserActivitiesPage;
