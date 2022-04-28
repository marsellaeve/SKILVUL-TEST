import "./../App.css";
import styles from "./../styles/Search.module.css";
import { fetchSearchGiphy } from "../fetch/FetchGiphy";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Search() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const fetchData = async (input) => {
    try {
      setValue(input);
      setData(await fetchSearchGiphy(input));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
      <div className={`${styles['mb-5']} title-subpage`}>
        SEARCH YOUR GIPHY
      </div>
      <center>
        <input className={`${styles['mb-10']} ${styles.textbox}`} value={value} onChange={(e) => fetchData(e.target.value)} placeholder='Search Giphy'/>
      </center>
      <div className={styles.container}>
        {data &&
          data.map((dt) => (
            <div key={dt.id} className={styles.borderbox}>
              <img
                alt={dt.title}
                src={dt.images.preview_gif.url}
                className={styles.gifSize}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
