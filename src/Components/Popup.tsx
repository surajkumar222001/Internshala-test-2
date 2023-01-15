import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface PopupProps {
  show: boolean;
  handleShow?: any;
  handleClose?: any;
  title?: any;
  userData?: any;
  addUser?: any;
  refetch?: any;
}

const Popup = ({
  show,
  handleShow,
  handleClose,
  title,
  userData,
  addUser,
  refetch,
}: PopupProps) => {
  const [popupName, setPopupName] = useState("");
  const [updateData, setUpdateData] = useState({
    name: "",
    role: "",
  });
  const [userAddData, setUseraddData] = useState({
    name: "",
    role: "",
    email: "",
    status: "",
    lastLogin: "",
    avatar: "avatar",
  });

  useEffect(() => {
    setUpdateData({
      name: userData?.name,
      role: userData?.role,
    });
    title == "Edit"
      ? setPopupName("Update User")
      : title == "Delete"
      ? setPopupName("Delete User")
      : setPopupName("Add User");
  }, [title]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUpdateData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleaAddUser = (e: any) => {
    const { name, value } = e.target;
    setUseraddData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  

  const handleSubmit = () => {
    const id = userData?._id;
    if (title === "Edit") {
      axios
        .put(
          `https://gifted-night-production.up.railway.app/api/users/update/${id}`,
          updateData
        )
        .then((res: any) => {
          refetch();
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });

        setTimeout(() => {
           window.location.reload()
           console.log("kjhfsjjvbvjsdjsdbfsjbsjfhbsjnfbsjbsejnnkbjd")
        }, 1000);

    } else if (title === "Delete") {
      axios
        .delete(
          `https://gifted-night-production.up.railway.app/api/users/delete/${id}`
        )
        .then((res: any) => {
          console.log(res);
          refetch();
        })
        .catch((err: any) => {
          console.log(err);
        });

        setTimeout(() => {
          window.location.reload()
          console.log("kjhfsjjvbvjsdjsdbfsjbsjfhbsjnfbsjbsejnnkbjd")
       }, 1000);
    } else if (title === "AddUser") {
      
      axios
        .post(
          `https://gifted-night-production.up.railway.app/api/users/insert`,
          userAddData
        )
        .then((res: any) => {
          refetch();
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });

        setTimeout(() => {
          window.location.reload()
          console.log("kjhfsjjvbvjsdjsdbfsjbsjfhbsjnfbsjbsejnnkbjd")
       }, 1000);
    } else {
      return;
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{popupName}</Modal.Title>
        </Modal.Header>
        {title === "Edit" && (
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="string"
                  name="name"
                  value={updateData?.name}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  value={updateData?.role}
                  type="string"
                  className="form-control"
                  placeholder="Role"
                  onChange={handleChange}
                  name="role"
                />
              </div>
            </form>
          </Modal.Body>
        )}
        {addUser && (
          <>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  onChange={handleaAddUser}
                  value={userAddData.name}
                  type="email"
                  className="form-control"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={handleaAddUser}
                  value={userAddData.email}
                  name="email"
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input
                  onChange={handleaAddUser}
                  value={userAddData.role}
                  name="role"
                  type="string"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  id="inlineFormCustomSelectPref"
                  onChange={handleaAddUser}
                  value={userAddData.status}
                  name="status"
                >
                  <option selected>Choose...</option>
                  <option value="Active">Active</option>
                  <option value="Invited">Invited</option>
                </select>
              </div>
              <div className="form-group">
                <label>LastLogin</label>
                <input
                  onChange={handleaAddUser}
                  value={userAddData.lastLogin}
                  name="lastLogin"
                  type="date"
                  className="form-control"
                />
              </div>
            </form>
          </>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="btn btn-primary"
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            {title}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
