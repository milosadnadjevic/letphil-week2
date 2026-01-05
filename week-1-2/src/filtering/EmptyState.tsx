import ProblemCard from "../components/ProblemCard";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";
  const filteredItems = items.filter(item => item.includes(searchTerm))
  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      <div>
        {filteredItems[0] ? "" : "No results found"}
      </div>
    </ProblemCard>
  );
};
