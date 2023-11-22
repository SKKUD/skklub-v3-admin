'use client';

import CommonTable from '@/components/common/common-table';
import { useEffect } from 'react';
import axios from 'axios';
import useCrudRequest from '@/hooks/use-crud-request';

const Clubs = () => {
	// Read request to /club/prev
	const crud = useCrudRequest('/club/prev');
	useEffect(() => {
		crud.read({
			campus: '명륜',
    });

    console.log(crud.data);
	}, []);

	return <>{/* <CommonTable /> */}</>;
};

export default Clubs;
