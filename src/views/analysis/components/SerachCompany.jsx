import React, { useEffect } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { VscSettings } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { TiDelete } from "react-icons/ti";
import Highlighter from "react-highlight-words";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { useGetcountry } from '../../../hooks/Country.hook';
import { findCompany } from '../../../api/Company.api';
import debounce from "lodash.debounce";
const SerachCompany = () => {
    const { t } = useTranslation();
    const { data, error, isLoading } = useGetcountry("page=1&limit=100");

    const [key, setKey] = React.useState('');
    const [country, setCountry] = React.useState({ name: 'all', flag: '' });
    const [results, setResults] = React.useState([]);

    useEffect(() => {
        const fetchData = debounce(async () => {
            if (key.trim() === "") {
                setResults([]);
                return;
            }
            const res = await findCompany(`search=${key}&country=${country.name === 'all' ? '' : country.name}`)
            console.log(res.data.data);
            setResults(res.data.data);
        }, 200); // Đợi 300ms sau khi nhập mới gọi API

        fetchData();
        return () => fetchData.cancel(); // Hủy debounce khi component unmount
    }, [key, country]);

    const onChangeKey = async (e) => {
        setKey(e.target.value)
    }
    const onClickCountry = (country, flex) => {
        setCountry({ name: country, flag: flex })
    }

    return (
        <div className="relative w-full md:mb-5 lg:w-[450px] xl:mb-5 xl:w-[600px]">
            <div className="absolute left-[6px] top-[50%] flex h-[26px] w-[26px] -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[#F97316] text-[20px] text-[#F97316]">
                <IoSearchOutline />

            </div>
            <div className="absolute right-24 lg:right-24 top-[50%] flex h-[26px] w-[30px] -translate-y-1/2 items-center justify-center ">

                <Menu>
                    <MenuHandler>
                        <span className=' text-black italic text-[10px]'>{country?.name}</span>
                    </MenuHandler>
                    <MenuList >
                        <MenuItem onClick={() => onClickCountry('all', '')} className='flex items-center justify-between'>
                            all
                        </MenuItem>
                        {!error && !isLoading && data?.data?.data.map((item, index) => {
                            return (
                                <MenuItem key={index} onClick={() => onClickCountry(item?.name, item?.flag)} className='flex items-center justify-between'>
                                    <span>{item?.name}</span>
                                    <div className='w-5 h-5 rounded-full overflow-hidden flex justify-center items-center'>
                                        <img alt={item.name} src={item.flag} className='w-full' />
                                    </div>
                                </MenuItem>
                            )
                        }
                        )}
                    </MenuList>
                </Menu>
            </div>
            <input
                type="text"
                onChange={onChangeKey}
                value={key}
                className="h-[40px] w-full rounded-md py-1 pl-9 text-[16px] text-black outline-none placeholder:text-[14px] sm:h-[40px] sm:text-[18px] md:pl-10 lg:w-[380px] xl:w-[600px]"
                placeholder={t("analysis.searchPlaceholder")}
            />
            <button
                type="button"
                className="absolute right-0 h-[40px] rounded-r-md bg-[#F97316] px-5 sm:h-[40px]"
            >
                {t("analysis.searchButton")}
            </button>
            {
                key.length > 0 &&
                <div className='absolute top-[40px] h-[400px]  w-full bg-white rounded-lg p-5 mt-2 shadow-lg'>
                    <div className=' overflow-auto h-[350px]'>
                        <div onClick={() => { setKey("") }} className='w-full flex justify-end sticky top-0 right-0'>
                            <TiDelete size={40} color='red' />
                        </div>
                        {
                            results && results.map((item, index) => {
                                return (
                                    <Link to={`/analysis/country/${item.countryId}/${item.id}`} key={index} className='w-full block text-black border border-b p-2 hover:bg-blue-200 ease-out' onClick={() => { setKey("") }}>
                                        <p className=' font-medium'>
                                            <Highlighter
                                                highlightClassName="YourHighlightClass"
                                                searchWords={key.split(' ') || []}
                                                autoEscape={true}
                                                textToHighlight={item.name}
                                            />
                                        </p>
                                        <p className=' italic'>{item.address}</p>
                                    </Link>
                                )
                            })
                        }
                        {key.length > 0 && results.length === 0 && <p className='text-center text-black'>ບໍ່ພົບຂໍ້ມູນ</p>}
                    </div>
                </div>

            }

        </div >
    )
}
export default SerachCompany