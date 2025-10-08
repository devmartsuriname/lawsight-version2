import { ReactNode } from 'react';

interface Column {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface AdminTableProps {
  columns: Column[];
  data: Array<Record<string, any>>;
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: any) => void;
  actions?: (row: any) => ReactNode;
}

export default function AdminTable({
  columns,
  data,
  loading = false,
  emptyMessage = 'No data available',
  onRowClick,
  actions,
}: AdminTableProps) {
  if (loading) {
    return (
      <div className="w-full overflow-x-auto admin-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--admin-border-subtle)]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider"
                >
                  {col.label}
                </th>
              ))}
              {actions && <th className="px-6 py-4"></th>}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, idx) => (
              <tr key={idx} className="border-b border-[var(--admin-border-subtle)]">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">
                    <div className="h-4 bg-[var(--admin-bg-tertiary)] rounded animate-pulse"></div>
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4">
                    <div className="h-4 bg-[var(--admin-bg-tertiary)] rounded animate-pulse w-20"></div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--admin-text-secondary)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto admin-scrollbar">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[var(--admin-border-subtle)] bg-[var(--admin-bg-secondary)]">
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className={`px-6 py-4 text-${col.align || 'left'} text-xs font-semibold text-[var(--admin-text-primary)] uppercase tracking-wider`}
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-4 text-right text-xs font-semibold text-[var(--admin-text-primary)] uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--admin-border-subtle)]">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`hover:bg-[var(--admin-bg-hover)] transition-colors ${
                onRowClick ? 'cursor-pointer' : ''
              }`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-6 py-4 text-sm text-[var(--admin-text-primary)] text-${col.align || 'left'}`}
                >
                  {row[col.key]}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 text-right text-sm">
                  <div
                    className="flex items-center justify-end gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {actions(row)}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
