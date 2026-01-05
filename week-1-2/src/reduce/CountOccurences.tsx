
import ProblemCard from "../components/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      <div>
        {Object.entries(wordCounts).map(([word, count]) => (
          <p key={word}>{word}: {count}</p>
        ))}
      </div>
    </ProblemCard>
  );
};
