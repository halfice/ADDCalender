import * as React from 'react';
import { IAddaCalenderWebpartProps } from './IAddaCalenderWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './AddaCalenderWebpart.module.scss';


export default class AddaCalenderWebpart extends React.Component<IAddaCalenderWebpartProps, {}> {
  public state: IAddaCalenderWebpartProps;

  constructor(props, context) {
    super(props);
    this.state = {
      description: "",
      CalenderValue: "",
      locallang: "en",
      CalenderHeading: "Meeting Room booking",
      btnSeven: 0,
      btnSeven30: 0,

      btnEight: 0,
      btnEight30: 0,

      btnNine: 0,
      btnNine30: 0,


      btnten: 0,
      btnten30: 0,

      btneleven: 0,
      btneleven30: 0,

      btntwelve: 0,
      btntwelve30: 0,

      btnone: 0,
      btnone30: 0,

      btntwo: 0,
      btntwo30: 0,

      btnthree: 0,
      btnthree30: 0,

      btnfour: 0,
      btnfour30: 0,

      btnfive: 0,
      btnfive30: 0,

      btnSix: 0,
      btnSis30: 0,


    };
    this._onChange = this._onChange.bind(this);

  }
  private _onChange(item: any): void {

    alert(item);
  }

  public componentDidMount() {
    var currenturl = window.location.href;
    if (currenturl.indexOf("ar-ae") > -1) {
      this.setState(
        {
          locallang: "ar",
          CalenderHeading: "Arabic Heading"
        });
    }
  }


  public render(): React.ReactElement<IAddaCalenderWebpartProps> {


    return (


      <div className={styles.addaCalenderWebpart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`ms-Grid-col ms-sm12 ms-xl12 `}>
              <div className={styles.headingmy}>
                {this.state.CalenderHeading}
              </div>
            </div>
          </div>
          <hr></hr>

          <div className={styles.row}>
            <div className={`ms-Grid-col ms-sm12 ms-xl3 `}>
              <div className={styles.headingmy}>
                Select Meeting Room
              </div>
            </div>
            <div className={`ms-Grid-col ms-sm12 ms-xl3 `}>
              <div className={styles.headingmy}>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className="ms-Grid-row">

              <div className={`ms-Grid-col ms-sm12 ms-xl6 `}>
                <Calendar
                  locale={this.state.locallang}
                  onChange={this._onChange}
                  value={this.state.CalenderValue}
                />  </div>
              <div className={`ms-Grid-col ms-sm12 ms-xl6 `}>
                <button className={styles.btn} >07:00 - 07:30</button>
                <button className={styles.btn} >07:30 - 8:00</button>
                <button className={styles.btn} >08:00 - 08:30</button>
                <button className={styles.btn} >08:30 - 09:00</button>
                <button className={styles.btn} >09:00 - 09:30</button>
                <button className={styles.btn} >09:00 - 10:00</button>
                <button className={styles.btn} >10:00 - 10:30</button>
                <button className={styles.btn} >10:30 - 11:00</button>
                <button className={styles.btn} >11:30 - 12:00</button>
                <button className={styles.btn} >12:30 - 01:00</button>
                <button className={styles.btn} >01:00 - 01:30</button>
                <button className={styles.btn} >01:30 - 02:00</button>
                <button className={styles.btn} >02:30 - 03:00</button>
                <button className={styles.btn} >03:00 - 03:30</button>
                <button className={styles.btn} >03:30 - 04:00</button>
                <button className={styles.btn} >04:00 - 04:30</button>
                <button className={styles.btn} >04:30 - 05:00</button>
                <button className={styles.btn} >05:00 - 05:30</button>
              </div>

            </div>



          </div>
          <hr></hr>

          <div className={styles.row}>
            <div className={`ms-Grid-col ms-sm12 ms-xl12 `}>
              <div className={styles.headingmy}>
               <button className={styles.btn}>Submit</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}
