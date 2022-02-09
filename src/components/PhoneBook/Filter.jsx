import React from "react";

import { SearchContainer, Search, InputSearch } from "./PhoneBook.styled";

const Filter = ({ value, onChange }) => (
  <SearchContainer>
    <Search htmlFor="">
      search
      <InputSearch type="text" value={value} onChange={onChange} />
    </Search>
  </SearchContainer>
);
export default Filter;
