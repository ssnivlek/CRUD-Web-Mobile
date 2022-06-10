import React, { useState, useEffect } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllSharpIcon from "@mui/icons-material/DoneAllSharp";
import api from "../../services/api";

export default function DataGridDemo() {
	const [rows, setRows] = useState([]);
	const [editable, setEditable] = useState(false);
	const [callEffect, setCallEffect] = useState(false);

	const columns = [
		{
			field: "produto",
			headerName: "Produto",
			width: 250,
			editable: false,
		},
		{
			field: "lote",
			headerName: "Lote",
			width: 300,
			editable: editable,
		},
		{
			field: "quantidade",
			headerName: "Quantidade",
			type: "number",
			width: 300,
			editable: editable,
		},
		{
			field: "funcao",
			headerName: "Função",
			width: 300,
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
			width: 250,
			editable: editable,
		},
		{
			field: "actions",
			headerName: "Ações",
			type: "actions",
			width: 300,
			getActions: (params) => [
				<GridActionsCellItem
					icon={editable ? <DoneAllSharpIcon /> : <EditIcon />}
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
		api.delete("/delete", {
			data: {
				product: name,
			},
		});
		setCallEffect(false);
	}

	function editItem(e) {
		rows.map(async (row) => {
			if (row.id === e.id) {
				await api.put("/edit", {
					product: row.produto,
					objects: { [e.field]: e.value },
				});
			} else {
				console.log({ ...row });
			}
		});
		setCallEffect(false);
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

	useEffect(() => {
		api.get("/list").then((response) => {
			arrangeObj(response.data);
		});
		setCallEffect(true);
	}, [callEffect]);

	return (
		<div style={{ height: 612, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				disableSelectionOnClick
				onCellEditCommit={editItem}
				rowHeight={50}
				rowLength={10000}
			/>
		</div>
	);
}
