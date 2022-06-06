import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HexagonSharpIcon from "@mui/icons-material/HexagonSharp";
import "./index.css";

export default function Header() {
	return (
		<AppBar position="static">
			<Container maxWidth="xl" className="container">
				<Toolbar disableGutters>
					<HexagonSharpIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 850,
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Gerenciador de Estoque
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
