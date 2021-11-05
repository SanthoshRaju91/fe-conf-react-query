import {
  Loader,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TablePagination,
} from "reactjs-ui-components";

export default function SearchHistoryTable({
  data = [],
  pages = 0,
  page = 0,
  loading = false,
  showPagination = false,
  handlePageSizeChange,
  handlePageChange,
}) {
  const TableHeaderCellStyle = "text-sm font-med	ium";
  const TableBodyCellStyle = "px-5";

  return (
    <div className="w-11/12 mx-auto mt-10">
      <Table className="w-full">
        <TableHead>
          <TableCell className={TableHeaderCellStyle} align="left">
            Query Image URL
          </TableCell>
          <TableCell className={TableHeaderCellStyle} align="left">
            Time
          </TableCell>
          <TableCell className={TableHeaderCellStyle} align="left">
            No. of Results
          </TableCell>
          <TableCell className={TableHeaderCellStyle} align="left">
            Response Time
          </TableCell>
        </TableHead>

        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan="6" align="right">
                <Loader
                  className="py-4"
                  size="medium"
                  position="center"
                ></Loader>
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            data.map((current, i) => (
              <TableRow key={i}>
                <TableCell className={TableBodyCellStyle} align="left">
                  {current.query}
                </TableCell>
                <TableCell className={TableBodyCellStyle} align="left">
                  {current.requested_time}
                </TableCell>
                <TableCell className={TableBodyCellStyle} align="left">
                  {current.nodes}
                </TableCell>
                <TableCell className={TableBodyCellStyle} align="left">
                  {current.elapsed_time}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {showPagination && (
        <TablePagination
          pageNo={page}
          totalPages={pages}
          pageSize={10}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </div>
  );
}
