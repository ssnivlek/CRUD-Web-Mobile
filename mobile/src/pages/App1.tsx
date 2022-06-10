import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonRow, IonGrid } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Namespace } from "socket.io";
import "./App1.css";

const objects = {
	"Vic Vaporub": {
		lote: "2DFS324",
		funcao: "Cheirinho bom",
		quantidade: "3000",
		alocado: true,
		validade: "17/06/2022",
		id: "5cb6ee7b-5f1b-4f7a-83c8-44896f339b19",
	},
	"Coristina D": {
		lote: "C23423",
		funcao: "Tira dor, desentope e revigora",
		quantidade: "32",
		alocado: false,
		validade: "01/01/2021",
		id: "1874295f-6703-4d79-81a8-a1f25cfba56f",
	},
	Melatonina: {
		lote: "32ZADD678",
		funcao: "dormir",
		quantidade: "2",
		alocado: true,
		validade: "11/04/2022",
		id: "e128b369-925f-4e38-8cbc-d843859c69b9",
	},
};

const App1: React.FC = () => {
	let rows: any[] = [];
	let name: any[] = [];

	function arrangeObj() {
		let originalObjs = Object.entries(objects);

		originalObjs.map(([key, value]) => {
			name.push(key);
			rows.push(value);
		});
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Gerente App</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{arrangeObj()}
				<IonGrid>
					<IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
						<IonCol>
							<strong>Produto:</strong>
						</IonCol>

						{name.map((item) => (
							<IonCol>{item}</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
						<IonCol>
							<strong>Lote:</strong>
						</IonCol>
						{rows.map((item) => (
							<IonCol>{item.lote}</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
						<IonCol>
							<strong>Função</strong>
						</IonCol>
						{rows.map((item) => (
							<IonCol>{item.funcao}</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
						<IonCol>
							<strong>Quantidade</strong>
						</IonCol>
						{rows.map((item) => (
							<IonCol>{item.quantidade}</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
						<IonCol>
							<strong>Alocado</strong>
						</IonCol>

						{rows.map((item) => (
							<IonCol>{item.alocado == true ? <>✓</> : <>✖</>}</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonGrid>
					<IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
						<IonCol>
							<strong>Validade</strong>
						</IonCol>

						{rows.map((item) => (
							<IonCol>{item.validade}</IonCol>
						))}
					</IonRow>
				</IonGrid>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">App</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default App1;
