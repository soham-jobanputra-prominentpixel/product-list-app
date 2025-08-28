import type React from "react";
import { type ChangeEvent } from "react";

type SearchInputProps = {
    onSearch: (searchText: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    return (
        <>
            <label htmlFor="searchInput" className="font-bold text-xl">
                Filter Products:
            </label>
            <br />
            <input
                type="text"
                id="searchInput"
                className="w-1/3 bg-white border-b-2 px-2 pt-2 pb-0.5"
                placeholder="Search"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onSearch(e.target.value)}
            />
        </>
    );
};

export default SearchInput;
