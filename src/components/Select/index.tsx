import React from 'react';
import {Container} from "./style"

const Select: React.FC = () => {

    return (
        <Container>
            <select>
            <option value="0">All</option>
            <option value="1">Grass</option>
            <option value="2">Fire</option>
            <option value="3">Water</option>
            <option value="4">Ice</option>
            <option value="5">Fairy</option>
            <option value="6">Psychic</option>
            <option value="7">Normal</option>
            <option value="8">Fight</option>
            <option value="9">Flying</option>
            <option value="10">Ground</option>
            <option value="11">Rock</option>
            <option value="12">Bug</option>
            <option value="13">Poison</option>
            <option value="14">Dark</option>
            <option value="15">Dragon</option>
            <option value="16">Eletric</option>
            <option value="17">Steel</option>
            <option value="18">Ghost</option>
            </select>
        </Container>
);

}
export default Select;