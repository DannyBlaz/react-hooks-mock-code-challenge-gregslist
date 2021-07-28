import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [data, dataSetter]=useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(json => dataSetter(json))
  },[])

  function handleSearch(searchBar){
    setSearch(searchBar)
    // console.log(event.target.value)
  }

  const searchItems = data.filter((item)=>{
    return item.description.toLowerCase().includes(search.toLowerCase())
  })

  console.log (search)
  function deleteCard(id){
    const updatedCards = data.filter((card) => card.id !== id)
    dataSetter(updatedCards)
  }
  
  return (
    <div className="app">
      <Header 
        onSearch = {handleSearch}
        searchValue = {search}

      />
      <ListingsContainer 
        onDelete = {deleteCard}
        data = {searchItems}
      />
    </div>
  );
}

export default App;
