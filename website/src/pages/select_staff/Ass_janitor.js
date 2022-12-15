import classNames from "classnames/bind";
import styles from "./Assign.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            
        Nguyễn Văn A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ID:13<br/>
            Janitor <br/>

            Vehicle ID: 217 
             <img className={cx("img1")} src="https://i.stack.imgur.com/l60Hf.png" alt="ss"></img>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        <div className={styles.cell}>
        <tr>
        <div className={cx('areas')}>
            
            Nguyễn Văn B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ID:2<br/>
            Janitor <br/>
      
            Vehicle ID: 211 
            <img className={cx("img1")} src="https://i.stack.imgur.com/l60Hf.png" alt="ss"></img>
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ID:8<br/>
            Janitor <br/>
      
            Vehicle ID: 214
            <img className={cx("img1")} src="https://i.stack.imgur.com/l60Hf.png" alt="ss"></img> 
            
          </div>
            <td>
              <Button className={cx("btn-select")} >CHỌN</Button>
            </td>
          </tr>
        </div>
          
        

        <div className={styles.cell}>
        <tr>
            
        <div className={cx('areas')}>
            
            Nguyễn Văn D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ID:5<br/>
          
            Janitor <br/>
      
            Vehicle ID: 279 
             <img className={cx("img1")} src="https://i.stack.imgur.com/l60Hf.png" alt="ss"></img>
            
          </div>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
        </table>
        <div className={cx("btns")}>
        <Button className={cx("btn-return")}><Link to='/' >Quay lại</Link></Button>
          <Button className={cx("btn-submit")}><Link to='/Map_area' >Tiếp theo</Link></Button>
        </div>
      </div>
     
    </>
  );
}

export default Ass_janitor;
