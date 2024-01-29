import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';
import {
	Box,
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CommonTable = ({ data, columns, options }) => {
	const table = useMaterialReactTable({
		data,
		columns,
		...options,
	});

	return <MaterialReactTable table={table} />;
};

export default CommonTable;
