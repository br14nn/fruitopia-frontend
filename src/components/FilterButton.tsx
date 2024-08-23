import IconButton from "@/components/ui/IconButton";
import FilterIcon from "@/components/svgs/FilterIcon";

const FilterButton = () => {
  return (
    <IconButton className="h-10 w-10 rounded-md bg-secondary-default p-2 transition-colors duration-200 hover:bg-secondary-200">
      <FilterIcon />
    </IconButton>
  );
};

export default FilterButton;
