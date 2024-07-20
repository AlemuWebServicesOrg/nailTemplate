import React from "react";
import { Filter } from "../../utils/Types";
import { ShapeFilterData } from "../../data/shapeFilterData";

interface ShapeFilterProps {
    filter: Filter;
};

const ShapeFilter: React.FC<ShapeFilterProps> = ({ filter }) => {
    return (
        <div id="ShapeFilterContainer">
            <select name="shapes" id="ShapesFilter">
                <option>Filter Shapes</option>
                <option value="square">Square</option>
                <option value="almond">Almond</option>
                <option value="coffin">Coffin</option>
                <option value="stiletto">Stiletto</option>
            </select>
        </div>
    );
};

export default ShapeFilter;