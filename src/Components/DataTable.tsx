import { useMemo, useState } from "react";
import { Column, useTable } from "react-table";
import { Table, Badge } from "react-bootstrap";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import Popup from "./Popup";

const DataTable = ({ dataaa }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const [buttonTitle, setButtonTitle] = useState<string>("");
  const [userData, setUserData] = useState<any>("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = useMemo(() => dataaa, [dataaa]);
  console.log(dataaa)

  const columns: readonly Column<{
    name: string;
    status: any;
    role: string;
    lastLogin: string;
    Action: string;
    _id:string;
    
  }>[] = useMemo(
    () => [
      
      {
        Header: "Name",
        accessor: "name" ,
         // accessor is the "key" in the data
      },
      {
        Header: "Status ",
        accessor: "status",
      },
      {
        Header: "Role ",
        accessor: "role",
      },
      {
        Header: "Last Login ",
        accessor: "lastLogin",
      },
      {
        Header: "Action",
        accessor: "Action",
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns });

  const handleButtonTitle = (e: string,data:any) => {
    setUserData(data)
    setButtonTitle(e);
    setShow(true);
  };

  return (
    <>
      <Popup
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        title={buttonTitle}
        userData={userData}
      />
      <Table striped hover size="lg" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
           
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell) => {
                  const data = {
                    data: `${
                       cell.value === "Active"
                        ? "active"
                        : cell.value === "Invited"
                        ? "notActive"
                        : cell.value === undefined
                        ? "action"
                        : cell.value
                    }`,
                  };
                  return (
                    <>
                      <td {...cell.getCellProps()}>
                        <span>
                          {data?.data === "active" ? (
                            <>
                              <Badge pill bg="success">Active</Badge>
                            </>
                          ) : data?.data === "notActive" ? (
                            <>
                              <Badge pill bg="secondary">Invited</Badge>
                            </>
                          ) : data?.data === "action" ? (
                            <div className="d-flex justify-content-around">
                              <>
                                <button
                                  onClick={() => {
                                    // console.log("row=>",row?.original)
                                    handleButtonTitle("Edit",row?.original);
                                  }}
                                >
                                  <AiOutlineEdit />
                                </button>
                              </>
                              <>
                                <button
                                  onClick={() => {
                                    handleButtonTitle("Delete",row?.original);
                                  }}
                                >
                                  <AiFillDelete />
                                </button>
                              </>
                            </div>
                          ) : (
                            <>{data?.data}</>
                          )}
                        </span>
                      </td>
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default DataTable;
