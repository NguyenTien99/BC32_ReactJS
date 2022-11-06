import { useState, useEffect } from 'react';

const useRequest = (fn, options = {}) => {
    // deps: là một array xác định các giá trị khi thay đổi sẽ chạy lại useEffect bên dưới
    const { deps = [] } = options;

    const [data = {}, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fn();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    },
    [...deps]
    //  deps
     );

  return { data };
};

export default useRequest;