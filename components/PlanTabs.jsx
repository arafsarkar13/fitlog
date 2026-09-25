export default function PlanTabs({ activeTab, onChange }) {
  const tabs = [
    { id: "plan", label: "Today's Plan" },
    { id: "saved", label: "Saved" },
  ];

  return (
    <div className="border-line mt-6 inline-flex rounded-full border p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={
            activeTab === tab.id
              ? "bg-accent rounded-full px-4 py-1.5 text-xs font-bold text-black sm:text-sm"
              : "text-muted rounded-full px-4 py-1.5 text-xs font-medium hover:text-white sm:text-sm"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
