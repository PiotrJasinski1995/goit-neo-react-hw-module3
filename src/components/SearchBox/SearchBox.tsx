import { useId } from "react";
import { SearchBoxStyled } from "./styled";

interface ISearchBox {
  filter: string;
  onHandleFilter: (filter: string) => void;
}

const SearchBox = ({ filter = "", onHandleFilter }: ISearchBox) => {
  const filterInputId = useId();

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value;
    onHandleFilter(filter);
  };

  return (
    <SearchBoxStyled>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={filterInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter field may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
        autoComplete="off"
        value={filter}
        required
      />
    </SearchBoxStyled>
  );
};

export default SearchBox;
