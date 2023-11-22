import { MaterialReactTable } from 'material-react-table';

const CommonTable = ({ data, columns }) => {
    
	return <MaterialReactTable data={data} columns={columns} />;
};

export default CommonTable;
