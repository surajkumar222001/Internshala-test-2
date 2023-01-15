import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { WiCloudDown } from "react-icons/wi";
import Badge from "react-bootstrap/Badge";
import { GetUserData } from "./helper";
import Pagination from "./Pagination";
import Table from "./DataTable";
import Popup from "./Popup";

let UserTable: React.FC = () => {

  const [tableDta, setTableDtaa] = useState<any>([]);
  const [currentItem, setCurrentItem] = useState<any>("");
  const [popupStatus, setPopup] = useState<boolean>(false);
  const [state, setState] = React.useState(0)
  const { data: userData, isLoading: userLoading ,refetch:refetch } = GetUserData();


  useEffect(() => {
    if (userData && userData?.data?.user && userData?.data?.user.length) {
      setTableDtaa((oldArray: any) => [...oldArray, userData?.data?.user]);
    }
  }, [userLoading, userData]);

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <>
      <Popup
        show={popupStatus}
        addUser
        title={"AddUser"}
        handleClose={handleClose}
        refetch={refetch}
      />
      <Container>
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h1">
                  <b>Users </b>
                </span>
                <span className="h5 sm ">
                  <Badge pill bg="success">
                    {tableDta[0]?.length} users
                  </Badge>
                </span><br />
                <span className="text-muted ">Manage your team members and their account permissions here</span>
              </div>
              <div>
                <Button variant="outline-secondary" size="lg">
                  <WiCloudDown size={30} /> <b> Download CSV </b>
                </Button>{" "}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setPopup(true)}
                >
                  <b>+ Add user</b>
                </Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            {currentItem && currentItem.length && (
              <Table dataaa={currentItem} />
            )}
          </Card.Body>
          <Card.Footer>
            {tableDta !== undefined && tableDta[0] && tableDta[0].length && (
              <Pagination items={tableDta[0]} setCurrentItem={setCurrentItem} />
            )}
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};
export default UserTable;
