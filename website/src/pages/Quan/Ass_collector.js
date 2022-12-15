import classNames from "classnames/bind";
import styles from "./Assign.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function Ass_collector({ ass_collector, type }) {
  return (
    <>
      
      <div className={cx("main")}>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DANH SÁCH NHÂN VIÊN THU GOM</h3>
        <table>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
        Nguyễn Văn A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ID:1<br/>
            Collector <br/>
      
            ID xe: 217 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        <div className={styles.cell}>
        <tr>
        <div className={cx('areas')}>
            
            Nguyễn Văn B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        ID:2<br/>
            Collector <br/>
      
            ID xe: 211 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ID:3<br/>
            Collector <br/>
      
            ID xe: 214 <br/>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
        

        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ID:4<br/>
          
            Collector <br/>
      
            ID xe: 279 <br/>
            
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
      <div className={cx("footer")}>footer</div>
    </>
  );
}

export default Ass_collector;
