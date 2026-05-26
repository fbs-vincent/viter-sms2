import NoData from "../../partials/NoData";
import ServerError from "../../partials/ServerError";
import FetchingSpinner from "../../partials/spinners/FetchingSpinner";
import TableLoading from "../../partials/TableLoading";

const ResponsiveTable = ({
  data,
  columns,
  isLoading = false,
  isFetching = false,
  error = false,
}) => {
  const mainCol = columns.find((c) => c.mobileLabel === null);
  const topRightCol = columns.find((c) => c.mobilePosition === "topRight");
  const bodyColumns = columns.filter(
    (c) =>
      c.mobileLabel !== null &&
      c.mobilePosition !== "topRight" &&
      c.mobilePosition !== "bottomRight",
  );
  const bottomRight = columns.find((c) => c.mobilePosition === "bottomRight");

  // console.log(bodyColumns);

  return (
    <>
      {/* Desktop table */}
      <div className="hidden xl:block overflow-x-auto relative">
        {!isLoading && isFetching && <FetchingSpinner />}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td className="p-5" colSpan="100%">
                  <TableLoading cols={2} count={20} />
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td className="p-5" colSpan="100%">
                  <ServerError />
                </td>
              </tr>
            ) : data.length == 0 ? (
              <tr>
                <td className="p-5" colSpan="100%">
                  <NoData />
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4">
                      {col.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="xl:hidden divide-y divide-gray-100 relative p-5">
        {!isLoading && isFetching && <FetchingSpinner />}
        {isLoading ? (
          <TableLoading cols={1} count={5} />
        ) : error ? (
          <ServerError />
        ) : data.length == 0 ? (
          <NoData />
        ) : (
          <>
            {data.map((row) => (
              <div key={row.id} className="p-4">
                <div className="flex justify-between items-start mb-3">
                  {mainCol?.render(row)}
                  {topRightCol?.render(row)}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    {bodyColumns.map((col) => (
                      <div key={col.key}>
                        <small className="text-xs text-gray-500">
                          {col.mobileLabel}
                        </small>
                        {col.render(row)}
                      </div>
                    ))}
                  </div>
                  {bottomRight?.render(row)}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ResponsiveTable;
