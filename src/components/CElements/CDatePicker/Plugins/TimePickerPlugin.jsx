import { useEffect, useMemo } from "react"
import { useRef } from "react"
import styles from "./style.module.scss"

const hours = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
]

const minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
]

const TimePickerPlugin = (props) => {
  const hourBlockRef = useRef()
  const minuteBlockRef = useRef()

  let { date, selectedDate, multiple, range, focused } = props.state,
    availbleDate = (multiple || range ? focused : selectedDate) || date

  const clickHandler = (value, key) => {
    availbleDate[key] = value

    props.handleChange(selectedDate, {
      ...props.state,
      selectedDate,
      focused,
    })
  }

  const hourValue = useMemo(() => {
    if (!availbleDate.hour) availbleDate.hour = 0

    return availbleDate.hour
  }, [availbleDate.hour])

  const minuteValue = useMemo(() => {
    if (!availbleDate.minute) availbleDate.minute = 0

    return availbleDate.minute
  }, [availbleDate.minute])

  useEffect(() => {
    if (!isNaN(hourValue)) {
      hourBlockRef.current.scrollTo({
        top: hourValue * 30,
        behavior: "smooth",
      })
    }
  }, [hourValue])

  useEffect(() => {
    if (!isNaN(minuteValue)) {
      minuteBlockRef.current.scrollTo({
        top: minuteValue * 30,
        behavior: "smooth",
      })
    }
  }, [minuteValue])

  return (
    <div
      className={styles.timePicker}
      style={{ padding: !props.disablePreview ? 0 : 10 }}
    >
      {/* {!props.disablePreview && <div className={styles.previewBlock} >

        <div className={styles.date} >{availbleDate?.format('MMMM DD, ddd') ?? ''}</div>

        <div>{hours[hourValue] ?? '00'} : {minutes[minuteValue] ?? '00'}</div>
      </div>} */}

      <div className={styles.timePickerBlock}>
        <div className={styles.scrollBlock} ref={hourBlockRef}>
          {hours.map((hour, index) => (
            <div
              onClick={() => clickHandler(index, "hour")}
              key={hour}
              className={`${styles.item} ${
                hourValue === index ? styles.active : ""
              }`}
            >
              {hour}
            </div>
          ))}
        </div>

        <div className={styles.scrollBlock} ref={minuteBlockRef}>
          {minutes.map((minute, index) => (
            <div
              key={minute}
              onClick={() => clickHandler(index, "minute")}
              className={`${styles.item} ${
                minuteValue === index ? styles.active : ""
              }`}
            >
              {minute}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimePickerPlugin
