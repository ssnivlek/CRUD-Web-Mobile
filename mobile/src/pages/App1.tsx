import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCol,
	IonRow,
	IonGrid,
	IonButton,
	IonBadge,
	IonItem,
	IonAccordionGroup,
	IonAccordion,
	IonLabel,
	IonList,
	IonListHeader,
	IonItemDivider,
	IonNote,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
	const [items, setItems] = useState<any[]>([]);

	const [names, setNames] = useState<any[]>([]);
	const [update, setUpdate] = useState<boolean>(false);

	const sendGetRequest = () => {
		return axios({
			url: "http://localhost:5000/list",
			method: "get",
		}).then((response) => {
			arrangeObj(response.data);
		});
	};

	const diffDate = (date: any) => {
		let dateInitial: any = new Date();

		let [day, month, year] = date.split("/");
		let dateFinal: any = new Date(+year, month - 1, +day);

		let difference: number = dateInitial - dateFinal;

		let daysDifference = Math.floor(difference / (24 * 3600 * 1000));

		return daysDifference;
	};

	function arrangeObj(objects: any) {
		let originalObjs = Object.entries(objects);
		let row: any[] = [];
		let name: any[] = [];

		originalObjs.map(([key, value]) => {
			row.push(value);
			name.push(key);
		});

		setItems(row);
		setNames(name);

		row = [];
		name = [];
	}

	useEffect(() => {
		setItems([]);
		setNames([]);
		sendGetRequest();
		setUpdate(true);
	}, [update]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar class="new-background-color">
					<IonTitle>
						<strong id="title">Gerente App</strong>
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonAccordionGroup>
					<IonListHeader>
						<strong id="product-title">Produtos:</strong>
					</IonListHeader>
					{names.map((value, index) => (
						<IonAccordion value="colors">
							<IonItem slot="header">
								<IonLabel>
									<strong>{value}</strong>
								</IonLabel>
							</IonItem>
							<IonList slot="content">
								<IonItem>
									<IonLabel>
										<strong>Lote: </strong> {items[index].lote}
									</IonLabel>
								</IonItem>
								<IonItem>
									<IonLabel>
										<strong>Função: </strong> {items[index].funcao}
									</IonLabel>
								</IonItem>
								<IonItem>
									<IonLabel>
										<strong>Quantidade: </strong> {items[index].quantidade}
									</IonLabel>
								</IonItem>
								<IonItem>
									<IonLabel>
										<strong>Alocado:</strong> {items[index].alocado == true ? <>✓</> : <>✖</>}
									</IonLabel>
								</IonItem>
								<IonItem>
									<IonLabel>
										<strong>Validade:</strong> {items[index].validade}
										<br></br>
										<br></br>
										{diffDate(items[index].validade) > 7 && <IonBadge color="danger">Vencido</IonBadge>}
										{diffDate(items[index].validade) <= 7 && <IonBadge color="primary">Válido</IonBadge>}
										{diffDate(items[index].validade) == -7 && (
											<IonBadge color="warning">Próximo ao Vencimento</IonBadge>
										)}
									</IonLabel>
								</IonItem>
							</IonList>
						</IonAccordion>
					))}
				</IonAccordionGroup>

				<IonButton onClick={() => setUpdate(false)}>Recarregar</IonButton>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Gerente App</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default App1;
