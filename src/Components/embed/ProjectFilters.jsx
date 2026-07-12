import { memo } from 'react';

const ProjectFilters = memo(({ filters, activeFilter, onSelectFilter }) => {
  return (
    <div
      className="embed-filters"
      style={{
        display: 'flex',
        justifyContent: 'center',
        columnGap: '12px',
        rowGap: '16px',
        marginBottom: '48px',
        flexWrap: 'wrap',
      }}
    >
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelectFilter(f)}
          className={`embed-filter-btn ${activeFilter === f ? 'active' : ''}`}
          aria-pressed={activeFilter === f}
        >
          {f}
        </button>
      ))}
    </div>
  );
});

ProjectFilters.displayName = 'ProjectFilters';

export default ProjectFilters;
