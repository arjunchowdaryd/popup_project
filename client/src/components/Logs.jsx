import React,{useState,useEffect}from 'react'
import axios from 'axios'
import "../css/Domain.css";

export default function Logs() {
    const [data, setData] = useState({
      LogsLists: [],
        page: 1,
        totalPages: null,
        pages: [1, 2, 3, 4, 5],
        totalEntries: null,
      });
    
      const [config, setConfig] = useState({
        keyword: null,
        pageSize: 10,
        page: 1,
        sortField: null,
        sortDirection: null,
      });
    
      const tableHeads = [
        { name: "#" },
        { name: "FROM", sortField: "domainName" },
        { name: "TO", sortField: "apiKey" },
        { name: "CAMPAIGN", sortField: "emailLimit" },
        { name: "SEND TIME", sortField: "emailLimit" },
        { name: "ACTION", sortField: "emailLimit" },

      ];
    
      useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000/api/logs`, {
            params: config,
          });
          setData(res.data);
        };
        fetchData();
      }, [config]);
      const setSortField = (sortField) => {
        if (sortField) {
          let sortDirection = 1;
          if (config.sortField == sortField && config.sortDirection == 1) {
            sortDirection = -1;
          }
          setConfig({ ...config, sortField, sortDirection });
        }
      };
      console.log(config);
      return (
        <div>
        <div class="table_elements">
          <div className="show_entries">
            <label for="">Show</label>
            <span>
            <select
                  class="en_selectbox"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setConfig({ ...config, pageSize: e.target.value });
                  }}
                >
                  <option>10</option>
                  <option value="15">15</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </span>
            <span className="items">items</span>
          </div>
    
    
          <div className="search_div">
           <form>
           <input
                  className="search"
                  placeholder="Search"
                  name="q"
                  onChange={(e) =>
                    setConfig({ ...config, keyword: e.target.value })
                  }
                />
            <span>
              <i class="fa fa-search search" aria-hidden="true"></i>
            </span>
           </form>
          </div>
        </div>
        <table className="table table-striped">
            <thead>
              <tr className="table_header">
                {tableHeads.map((head) =>(
                  <th onClick={() => setSortField(head.sortField)}>
                    {head.name}
                    {head.sortField ? (
                      <React.Fragment>
                        <span>
                          <i
                            style={{ paddingLeft: "0.5rem" }}
                            class="fa fa-long-arrow-up"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span>
                          <i
                            style={{ paddingLeft: "0.2rem" }}
                            class="fa fa-long-arrow-down"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </React.Fragment>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.LogsLists.map((post) => (
                <tr>
                  <td key={post.id}>{post.snum}</td>
                  <td>{post.from}</td>
                  <td>{post.to}</td>
                  <td>{post.campaign}</td>
                  <td>03-Nov-2020 14:03 pm</td>
                  <td>
                    <i style={{ color: "white" }} class="fa fa-pencil-square-o"></i>
                    <i
                      style={{ paddingLeft: "1.5rem", color: "white" }}
                      class="fa fa-share-square-o"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <a
              onClick={() => {
                if (config.page > 1)
                  setConfig({ ...config, page: config.page - 1 });
              }}
            >
              &laquo;
            </a>
            {data.pages.map((pageNum) => {
              if (pageNum === "prev3" || pageNum === "next3") {
                return (
                  <a
                    onClick={() =>
                      setConfig({
                        ...config,
                        page:
                          pageNum === "prev3" ? config.page - 3 : config.page + 3,
                      })
                    }
                  >
                    ...
                  </a>
                );
              } else {
                return (
                  <a
                    className={data.page === pageNum ? "active" : ""}
                    onClick={() => setConfig({ ...config, page: pageNum })}
                  >
                    {pageNum}
                  </a>
                );
              }
            })}
    
            <a
              onClick={() => {
                if (config.page < data.totalPages)
                  setConfig({ ...config, page: config.page + 1 });
              }}
            >
              &raquo;
            </a>
          </div>
          <div className="show_entery">
            <p>
              Show entries{" "}
              <a href="#">
                {config.pageSize}/{data.totalEntries}
              </a>
            </p>
          </div>
        </div>
      )
}

