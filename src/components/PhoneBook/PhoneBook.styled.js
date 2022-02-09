import styled from "styled-components";

export const PhoneBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  align-items: center;
`;

export const LabelName = styled.label`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const InputName = styled.input`
  width: 300px;
  height: 40px;
  font-size: 22px;
  padding: 0 4px;
  margin-left: 7px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.3);
`;

export const LabelContact = styled.label`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const InputContact = styled.input`
  width: 300px;
  height: 40px;
  font-size: 22px;
  padding: 0 4px;
  margin-left: 7px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.3);
`;
export const AddContact = styled.button`
  background-color: red;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

export const TopTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ListValues = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: -10px;
  padding: 20px;
  justify-content: center;
  border-radius: 5px;
  width: 600px;
  margin: 0 auto 0 auto;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  list-style-type: none;
  &:hover {
    box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const Contact = styled.p`
  font-size: 18px;
  font-size: 18px;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
`;
export const DeleteBtn = styled.button`
  background-color: brown;
  color: bisque;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -20px;
`;
export const Search = styled.label`
  color: blue;
  margin-right: 20px;
`;
export const InputSearch = styled.input`
  width: 300px;
  height: 40px;
  font-size: 22px;
  padding: 0 4px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.3);
`;
