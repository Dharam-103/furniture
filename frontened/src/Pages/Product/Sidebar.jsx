import {
    Box, Heading, Input, Checkbox, Text,Button
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialbrand = searchParams.getAll("brand");
    const initialOrder = searchParams.get("order");
    const initialPage = searchParams.get("page");
    const [brand, setbrand] = useState(initialbrand || []);
    const [order, setOrder] = useState(initialOrder || '');
     const [page,setPage] = useState(+initialPage || 1);

    const handleChange = (e) => {
        let newbrand = [...brand];
        const value = e.target.value;

        if (newbrand.includes(value)) {
            newbrand = newbrand.filter((el) => el !== value);
        } else {
            newbrand.push(value);
        }

        setbrand(newbrand)
    };

    const handleSort = (e) => {
        setOrder(e.target.value)
    }

    const handlePage = (value) =>{
   setPage((prev)=>{
    if(prev + value === 0){
        return prev
    }
    return prev + value
   })
    }

    useEffect(() => {
        let params = {
            brand,page
        }

        order && (params.order = order);

        setSearchParams(params)
    }, [brand, order,page]);

    return (
        <Box textAlign={'left'} border="0px solid black" w={'xs'} boxShadow={'2xl'} mt={10}>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>FILTER BY BRAND</Heading>
            <br />
            <Box textAlign={'left'}>
                <div>
                    <input
                        type="checkbox"
                        value={"By Urban Ladder"}
                        onChange={handleChange}
                        checked={brand.includes("By Urban Ladder")} />
                    <label>By Urban Ladder</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        value={"By Adorn India Sofa"}
                        onChange={handleChange}
                        checked={brand.includes("By Adorn India Sofa")} />
                    <label>By Adorn India Sofa</label>
                </div>

                <div>
                    <Checkbox
                        type="checkbox"
                        value={"By Urban Ladder Create"}
                        onChange={handleChange}
                        checked={brand.includes("By Urban Ladder Create")}
                    />
                    <label>By Urban Ladder Create</label>
                </div>

                <div>
                    <Checkbox
                        type="checkbox"
                        value={"By Albany Sofa"}
                        onChange={handleChange}
                        checked={brand.includes("By Albany Sofa")}
                    />
                    <label>By Albany Sofa</label>
                </div>
            </Box>
            <br />
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>SORT BY PRICE</Heading>
            <br/>
            <div onChange={handleSort}>
                <input
                    type="radio"
                    value={"asc"}
                    defaultChecked={order === "asc"}
                    name="order"
                />
                <label>Low To High</label>
                <br/>
                <input
                    type="radio"
                    value={"desc"}
                    defaultChecked={order === "desc"}
                    name="order"
                />
                <label>High To Low</label>
            </div>
            <br />
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>Pagination</Heading>
            <br/>
            <Box>
                <Button backgroundColor={'#ff6b6b'} onClick={()=>{handlePage(-1)}}>PREV</Button>
                <Button>{page}</Button>
                <Button backgroundColor={'#ff6b6b'} onClick={()=>{handlePage(1)}} >NEXT</Button>
            </Box>
            <br/>
        </Box>
    )
}

export default Sidebar

