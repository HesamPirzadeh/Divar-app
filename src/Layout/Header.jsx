import { Link, useNavigate } from "react-router-dom";

import styles from "css/Header.module.css";
import { getCookie } from "utils/cookie";
import { clearCookies } from "utils/cookie";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import { useEffect, useState } from "react";

const btn = [
  { text: "خروج از حساب", path: "/authpage", id: 1 },
  { text: "صفحه شخصی", path: "/dashboard", id: 2 },
  { text: "صفحه اصلی", path: "", id: 3 },
];

function Header() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const hoveredShow = () => {
    setDisplay(!display);
  };
  const hoverdEnd = () => {
    setDisplay(!display);
  };

  const logOut = (e) => {
    const name = e.target.innerText;
    if (name === "خروج از حساب") {
      clearCookies();
      if (!document.cookie) {
        window.location.reload();
      }
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <span>
          <img src="profile.svg" />
          <button onClick={hoveredShow}>دیوار من</button>
        </span>
        {display && (
          <div className={styles.main}>
            {btn.map((i) => (
              <Link key={i.id} to={i.path} onClick={hoverdEnd}>
                <button className={styles.exit} onClick={logOut}>
                  {i.text}
                </button>
              </Link>
            ))}
          </div>
        )}
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
