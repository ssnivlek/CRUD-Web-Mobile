import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import api from "../../services/api";
import Data from "../Data/index";
import "./index.css";

export default function Form() {
	const [nomeProduto, setNomeProduto] = useState("");
	const [loteProduto, setLoteProduto] = useState("");
	const [qtdProduto, setQtdProduto] = useState("");
	const [funcProduto, setFuncProduto] = useState("");
	const [valProduto, setValProduto] = useState("");
	const [alocProduto, setAlocProduto] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [showButton, setShowButton] = useState(true);
	const [render, setRender] = useState(false);

	const mainBox = {
		padding: "auto",
		margin: "auto",
		width: "75%",
		display: "grid",
		gridTemplateColumns: "repeat(7, 100%)",
		height: "250px",
	};
	const columnGridSpacing = { xs: 1, sm: 2, md: 3 };

	function sendButtons() {
		return (
			<Grid container rowSpacing={2} columnSpacing={2}>
				<Grid item xs={6}>
					<Button
						onClick={() => {
							addItem();
							setRender(false);
						}}
						fullWidth
					>
						Enviar
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						onClick={() => {
							resetFields();
							setShowForm(false);
							setShowForm(true);
						}}
						fullWidth
					>
						Resetar Formulário
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button
						onClick={() => {
							setShowButton(true);
							setShowForm(false);
						}}
						fullWidth
					>
						Cancelar
					</Button>
				</Grid>
			</Grid>
		);
	}

	function completeForm() {
		return (
			<>
				<br></br>
				<Box sx={mainBox}>
					<Grid container rowSpacing={0} columnSpacing={columnGridSpacing} align="center" justify="center">
						<Grid item xs={6}>
							<TextField
								label="Nome"
								required
								onChange={(e) => {
									setNomeProduto(e.target.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite o Nome do Produto"
								fullWidth
								value={nomeProduto}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Lote"
								required
								onChange={(e) => {
									setLoteProduto(e.target.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite o Lote do Produto"
								fullWidth
								value={loteProduto}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Quantidade"
								type="number"
								required
								onChange={(e) => {
									setQtdProduto(e.target.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite a Quantidade do Produto"
								fullWidth
								value={qtdProduto}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Função"
								required
								onChange={(e) => {
									setFuncProduto(e.target.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite a Função do Produto"
								fullWidth
								value={funcProduto}
							/>
						</Grid>
						<Grid item xs={6}>
							<Stack spacing={0}>
								<FormControlLabel
									control={<Checkbox checked={alocProduto} />}
									label="Alocado"
									class={"input"}
									onChange={() => {
										setAlocProduto(true);
									}}
								/>
								<TextField
									id="dateTimeFrom"
									type="date"
									onChange={(e) => {
										setValProduto(e.target.value);
									}}
									InputLabelProps={{
										shrink: true,
									}}
									value={valProduto}
								/>
							</Stack>
						</Grid>
						<Grid item xs={6}>
							{sendButtons()}
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}

	function resetFields() {
		setNomeProduto("");
		setLoteProduto("");
		setQtdProduto("");
		setFuncProduto("");
		setAlocProduto(false);
		setValProduto("");
	}

	function addItem() {
		if (loteProduto && funcProduto && nomeProduto && qtdProduto && valProduto && nomeProduto) {
			api.post("/add", {
				[nomeProduto]: {
					lote: loteProduto,
					funcao: funcProduto,
					quantidade: qtdProduto,
					alocado: alocProduto,
					validade: valProduto,
				},
			});
		} else {
			console.log("Defina os campos do produto");
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setRender(true);
		}, 500);
	}, [render]);

	return (
		<>
			{render && <Data state={showForm} />}
			<br></br>
			{showButton && (
				<Button
					onClick={() => {
						setShowForm(true);
						setShowButton(false);
					}}
					fullWidth
				>
					Adicionar Novo Item
				</Button>
			)}
			{showForm && completeForm()}
		</>
	);
}
