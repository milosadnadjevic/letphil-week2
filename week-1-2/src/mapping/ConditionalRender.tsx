import ProblemCard from "../components/ProblemCard";


export const ConditionalRender = () => {
  const users = [
    { id: 1, name: "Sam", isOnline: true },
    { id: 2, name: "Kai", isOnline: false },
    { id: 3, name: "Tony", isOnline: true },
    { id: 4, name: "Ronald", isOnline: true },
    { id: 5, name: "Sharon", isOnline: false },
  ];

  return (
    <ProblemCard
      title="Map 07 — Conditional rendering inside map"
      method="map"
      question='Render each user with a status: "🟢 Online" or "⚪ Offline".'
      dataPreview={users}
    >
      <ul>
        {users.map(user => 
          <li key={user.id}>{user.isOnline ? `${user.name} 🟢 Online` : `${user.name} ⚪ Offline`}</li>
        )}
      </ul>
     
    </ProblemCard>
  );
};
