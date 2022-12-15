import classNames from "classnames/bind";
import styles from "./Map_area.module.scss";
import { Button } from "react-bootstrap";
import {FaMapMarkerAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Map_area({ map_area, type }) {
  return (
    <>
      
      <div className={cx("main")}>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BẢN ĐỒ</h3>
        <table>
          <tr>
            <td>
              <Link to='/map' >
            <div className={cx('areas')}>
              <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; KHU VỰC A &nbsp;&nbsp;&nbsp;
            <FaMapMarkerAlt size={70} style={{margin: "4px 1px 0px 5px"}}/>

            <logo/>
            </div>
            </Link>
            </td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
          <tr>
          <td>
          <Link to='/map' >
            <div className={cx('areas')}>
            <br/> 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            KHU VỰC B &nbsp;&nbsp;&nbsp;
            <FaMapMarkerAlt size={70} style={{margin: "4px 1px 0px 5px"}}/>

            </div>
            </Link>
            </td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
          

        </table>
        <div className={cx("btns")}>
          <Button className={cx("btn-return")}><Link to='/Ass_janitor' >Quay lại</Link></Button>
          <Button className={cx("btn-submit")}><Link to='/Task-Assignment-1' >Tiếp theo</Link></Button>
        </div>
      </div>
    </>
  );
}

export default Map_area;
