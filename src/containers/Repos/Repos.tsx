import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Pagination from "../../components/Pagination/Pagination";
import { useApolloClient } from "@apollo/client";
import { GET_REPOS } from "../../graphql/queries";
import "./Repos.css";

interface IGetRepos {
  value: string;
  per_page: number;
  page: number;
}

interface IRepos {
    repos: IRepo
}

interface IRepo {
    total_count: number
    items: Array<IReposItems>
}

interface IReposItems {
    name: string
    html_url: string
}

const PER_PAGE: number = 20;
let page: number = 1;

const Repos:React.FC = () => {
    const [value, setValue] = useState("");
    const [reposData, setReposData] = useState<IRepos>();

    const client = useApolloClient();

    const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    };

      const getRepos= async () => {
       const { data } =  await client.query<IRepos, IGetRepos>({
                query: GET_REPOS, 
                variables: { value: value, per_page: PER_PAGE, page: page },
           });
           setReposData(data)
  } 


      const onSearchUsers =  (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        page = 1;
        try {
            getRepos();
        }
        catch(err) {
            console.log(err);
        }
    }
};

  const navigatePage = (n: number) => {
      page += n;
      getRepos();
  };
    return (
        <div className="section-repos">
            <div className="search-pagination">
                <SearchInput value={value} onSearchUsers={onSearchUsers} searchChange={searchChange} />
                <Pagination classNameNext={reposData ? (reposData.repos.total_count / PER_PAGE > page ? "" : "disabled") : "disabled"}  classNamePrev={page > 1 ? "" : "disabled"} navigatePage={navigatePage} />
            </div>
               <div className="repos-list">
          {reposData?.repos.items &&  reposData?.repos.items.map((item, idx) => {
              return <div className="repo-item" key={idx}> 
                  <p>{item.name}</p>
                 <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</a>
             </div>
          }) 
          }
      </div>
        </div>
    )
}

export default Repos;