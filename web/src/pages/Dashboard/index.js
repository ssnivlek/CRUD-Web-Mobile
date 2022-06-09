import React from "react";
import Header from "../../components/Header/index";
import Data from "../../components/Data/index";
import Form from "../../components/Form/index";

export default function Dashboard() {
	return (
		<div id="content">
			<Header />
			<Data />
			<Form />
		</div>
	);
}
