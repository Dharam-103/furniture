import {
    Box, Heading, Input, Checkbox
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll("category");
    const initialOrder = searchParams.get("order");
    const [category, setCategory] = useState(initialCategory || []);
    const [order, setOrder] = useState(initialOrder || '');

    const handleChange = (e) => {
        let newCategory = [...category];
        const value = e.target.value;

        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value);
        } else {
            newCategory.push(value);
        }

        setCategory(newCategory)
    };

    const handleSort = (e) => {
        setOrder(e.target.value)
    }

    useEffect(() => {
        let params = {
            category,
        }

        order && (params.order = order);

        setSearchParams(params)
    }, [category, order]);

    return (
        <Box textAlign={'left'} border="1px solid black" w='sm' boxShadow={'2xl'}  >
            <Heading>FILTER BY BRAND</Heading>
            <br/>
            <Box textAlign={'left'}>
                <div>
                    <Checkbox
                        type="checkbox"
                        value={"By Urban Ladder"}
                        onChange={handleChange}
                        checked={category.includes("By Urban Ladder")}>By Urban Ladder</Checkbox>
                </div>

                <div>
                    <Checkbox
                        defaultChecked
                        value={"By Adorn India Sofa"}
                        onChange={handleChange}
                        checked={category.includes("By Adorn India Sofa")}>By Adorn India Sofa
                        </Checkbox>    
                </div>

                <div>
                    <Checkbox
                        defaultChecked
                        value={"By Urban Ladder Create"}
                        onChange={handleChange}
                        checked={category.includes("By Urban Ladder Create")}>By Urban Ladder Create
                        </Checkbox>    
                </div>

                <div>
                    <Checkbox
                        defaultChecked
                        value={"By Albany Sofa"}
                        onChange={handleChange}
                        checked={category.includes("By Albany Sofa")}>By Albany Sofa
                        </Checkbox>    
                </div>
            </Box>

            <Heading>SORT BY PRICE</Heading>
            <br/>
        </Box>
    )
}

export default Sidebar
