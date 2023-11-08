import React from 'react'
import styles from "./Search.module.css";

const Search = () => {
    return (
      <div className={`${styles.searchBarContainer} searchBarContainer`}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={`${styles.input} input`}
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
  

export default Search