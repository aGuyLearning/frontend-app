import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import {Card} from 'react-bootstrap';
import SearchBar from './SearchBar';
import SearchBarOneWay from './SearchBarOneWay';

import './SearchStyles.scss';

const Search = (props) => {
    return (
        <Card className='search-card'>
    <div>
       <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Roundtrip</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">One-way</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <SearchBar/>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><SearchBarOneWay/></div>
</div></div>
</Card>);
} 

export default Search;