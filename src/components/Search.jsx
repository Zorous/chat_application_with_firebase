import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type={"text"} placeholder="search for a user..."/>
      </div>

      <div className="userChat">
      <img src="https://imgs.search.brave.com/z6CVILcAFwbx_jZfpaTlYrzExkd0bHJHtm1Tw1PS_4o/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/ZmFjZWJvb2svMDAw/LzAxMi81NDkvR2ls/Z2FtZXNoLmZ1bGwu/MTQxNzAyOS5qcGc" alt='pic' />
      <div className="userChatInfo">
      <span>Jane</span>
      </div>
      </div>
    </div>
  );
};

export default Search;
