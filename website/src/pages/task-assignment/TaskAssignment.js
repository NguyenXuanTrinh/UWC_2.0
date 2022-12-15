import classNames from "classnames/bind";
import styles from "./TaskAssignment.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Navbar } from "../../comp/navbar.js";
const cx = classNames.bind(styles);

function TaskAssignment({ task, type }) {
  function GetBack(){
    if(type==="Xe đẩy"){
      return(
        <Button className={cx("btn-return")}><Link to='/Map_area' >Quay lại</Link></Button>
      )
    }
    return(
      <Button className={cx("btn-return")}><Link to='/Mcps' >Quay lại</Link></Button>
    )
  }
  function GetVehicle(){
    if(type==="Xe đẩy"){
      return(
        <Button className={cx("btn-select")}><Link to='/Troller'>Select</Link></Button>
      )
    }
    return(
      <Button className={cx("btn-select")}><Link to='/Vehicle'>Select</Link></Button>
    )
  }
  return (
    <>
      <div className={cx("main")}>
        <h3>Phân công nhiệm vụ</h3>
        <table>
          <tr>
            <td>Tên nhiệm vụ:</td>
            <td>{task.name}</td>
          </tr>
          <tr>
            <td>ID:</td>
            <td>{task.id}</td>
          </tr>
          <tr>
            <td>Khu vực:</td>
            <td>{task.workingArea}</td>
          </tr>
          <tr>
            <td>Điểm bắt đầu:</td>
            <td>{task.startPlace}</td>
          </tr>
          <tr>
            <td>Kết thúc:</td>
            <td>{task.endPlace}</td>
          </tr>
          <tr>
            <td>Ngày:</td>
            <td>
              <Button className={cx("btn-select")}>Select</Button>
            </td>
          </tr>
          <tr>
            <td>{type}:</td>
            <td>
              <GetVehicle />
            </td>
          </tr>
        </table>
        <div className={cx("btns")}>
          <GetBack />
          <Button className={cx("btn-submit")}><Link to='/' >Xác nhận</Link></Button>
        </div>
      </div>
    </>
  );
}

export default TaskAssignment;
