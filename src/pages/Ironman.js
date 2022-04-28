import "./../App.css";
import styles from "./../styles/Ironman.module.css";
import { fetchIronmanGiphy } from "../fetch/FetchGiphy";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Ironman() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      setData(await fetchIronmanGiphy());
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (data === null) {
      fetchData();
    }
    console.log(data);
  });
  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
      <div className={`${styles.spacetitle} title-subpage`}>IRON MAN GIPHY</div>
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
