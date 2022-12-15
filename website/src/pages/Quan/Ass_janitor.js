import classNames from "classnames/bind";
import styles from "./Assign.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function Ass_janitor({ ass_janitor, type }) {
  return (
    <>
      <div className={cx("main")}>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DANH SÁCH NHÂN VIÊN LAO CÔNG</h3>
        <table>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
        Nguyễn Văn A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ID:1<br/>
            Janitor <br/>
      
            ID xe: 215 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ID:2<br/>
            Janitor <br/>
      
            ID xe: 210 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ID:3<br/>
            Janitor <br/>
      
            ID xe: 295 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Thị G&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ID:4<br/>
            Janitor <br/>
      
            ID xe: 234 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        
          
        </table>
        <div className={cx("btns")}>
          <Button className={cx("btn-return")}>Quay lại</Button>
          <Button className={cx("btn-submit")}>Xác nhận</Button>
        </div>
      </div>
     
    </>
  );
}

export default Ass_janitor;
