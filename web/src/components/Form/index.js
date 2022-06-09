import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import "./index.css";

export default function Form() {
	const [nomeProduto, setNomeProduto] = useState("");
	const [loteProduto, setLoteProduto] = useState("");
	const [qtdProduto, setQtdProduto] = useState("");
	const [funcProduto, setFuncProduto] = useState("");
	const [alocProduto, setAlocProduto] = useState("");
	const [valProduto, setValProduto] = useState("");
	const [showForm, setShowForm] = useState(false);
	const [showButton, setShowButton] = useState(true);

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
							console.log("1");
						}}
						fullWidth
					>
						Enviar
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						onClick={() => {
							console.log("2");
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
				<h3 class="center">Adicione seu Item</h3>
				<Box sx={mainBox}>
					<Grid container rowSpacing={0} columnSpacing={columnGridSpacing} align="center" justify="center">
						<Grid item xs={6}>
							<TextField
								label="Nome"
								required
								onChange={(e) => {
									setNomeProduto(e.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite o Nome do Produto"
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Lote"
								required
								onChange={(e) => {
									setLoteProduto(e.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite o Lote do Produto"
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Quantidade"
								type="number"
								required
								onChange={(e) => {
									setQtdProduto(e.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite a Quantidade do Produto"
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Função"
								required
								onChange={(e) => {
									setFuncProduto(e.value);
								}}
								InputProps={{
									startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
								placeholder="Digite a Função do Produto"
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<Stack spacing={0}>
								<FormControlLabel control={<Checkbox />} label="Alocado" class={"input"} />
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DesktopDatePicker
										label="Validade"
										inputFormat="dd/MM/yyyy"
										value={null}
										onChange={(e) => {
											setValProduto(e.value);
										}}
										renderInput={(params) => <TextField {...params} fullWidth />}
										required
									/>
								</LocalizationProvider>
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

	return (
		<>
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
