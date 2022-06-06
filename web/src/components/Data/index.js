import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import api from "../../services/api";

export default function DataGridDemo() {
	const [rows, setRows] = React.useState([]);
	const [editable, setEditable] = React.useState(false);
	const [callEffect, setCallEffect] = React.useState(false);

	const columns = [
		{
			field: "produto",
			headerName: "Produto",
			width: 150,
			editable: editable,
		},
		{
			field: "lote",
			headerName: "Lote",
			width: 150,
			editable: editable,
		},
		{
			field: "quantidade",
			headerName: "Quantidade",
			type: "number",
			width: 150,
			editable: editable,
		},
		{
			field: "funcao",
			headerName: "Função",
			width: 150,
			editable: editable,
		},
		{
			field: "alocado",
			headerName: "Alocado",
			type: "boolean",
			width: 150,
			editable: editable,
		},
		{
			field: "validade",
			headerName: "Validade",
			type: "date",
			width: 150,
			editable: editable,
		},
		{
			field: "actions",
			headerName: "Ações",
			type: "actions",
			width: 150,
			getActions: (params) => [
				<GridActionsCellItem
					icon={editable ? <CheckIcon /> : <EditIcon />}
					label="Edit"
					onClick={() => editableChange()}
				/>,
				<GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => deleteItem(params.row.produto)} />,
			],
		},
	];

	function editableChange() {
		setEditable((editable) => !editable);
	}

	function deleteItem(name) {
		setCallEffect(false);
		api.delete("/delete", {
			data: {
				product: name,
			},
		});
	}

	function arrangeObj(obj) {
		let originalObjs = Object.entries(obj);

		let result = originalObjs.map(([key, value]) => {
			let jsonObjs = value;
			jsonObjs.produto = key;
			return jsonObjs;
		});

		setRows(result);
	}

	React.useEffect(() => {
		api.get("/list").then((response) => {
			arrangeObj(response.data);
		});

		setCallEffect(true);
	}, [callEffect]);

	return (
		<div style={{ height: 500, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				disableSelectionOnClick
				rowHeight={50}
				rowLength={10000}
			/>
		</div>
	);
}
