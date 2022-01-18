import debug from 'debug';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Button, Form, List, Message} from 'semantic-ui-react';
import {CountryFindReturn, DesignationTypeEnum, HistoricSiteEntityConstructor, StateFindReturn} from 'terrene-types';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';

const d = debug('terrene.web.Pages.SubmitHistoricSite.Content');

export function Content() {
	const navigate = useNavigate();
	const {memberId} = useParams<{memberId: string}>();
	const [errors, setErrors] = useState<string[]>();
	const [countries, setCountries] = useState<CountryFindReturn>();
	const [historicSiteData, setHistoricSiteData] = useState<Partial<HistoricSiteEntityConstructor>>();
	const [id, setId] = useState('1');
	const [states, setStates] = useState<StateFindReturn>();

	useEffect(() => {
		if (!states) {
			server.fetch('state/find').then(response => {
				setStates(response.data);
			});
		}
	}, [states, setStates]);

	useEffect(() => {
		if (!countries) {
			server.fetch('country/find').then(response => {
				setCountries(response.data);
			});
		}
	}, [countries, setCountries]);

	function submitHistoricSite() {
		const badFields: string[] = [];
		if (!historicSiteData?.content) badFields.push('Content');
		if (!historicSiteData?.name) badFields.push('Name');
		if (!historicSiteData?.source) badFields.push('Source');
		if (!historicSiteData?.activePeriodStart) badFields.push('Active Period Start');
		if (!historicSiteData?.latitude) badFields.push('Latitude');
		if (!historicSiteData?.longitude) badFields.push('Longitude');
		if (!historicSiteData?.designations) badFields.push('Designations');
		if (!historicSiteData?.state) badFields.push('State');
		if (!historicSiteData?.country) badFields.push('Country');
		historicSiteData?.designations?.forEach(designation => {
			if (!designation.type) badFields.push('Type');
			if (!designation?.year) badFields.push('Year');
			if (!designation?.officialName) badFields.push('Official Name');
		});
		if (!historicSiteData?.featuredImage) badFields.push('Featured Image');

		if (badFields.length === 0) {
			server.fetch('historic-site/submit', historicSiteData, memberId, 'PUT').then(() => {
				setErrors(undefined);
				toast.success('Historic site submitted!');
				navigate(`/admin/${memberId}`);
			});
		} else {
			setErrors(badFields);
		}
	}

	return (
		<ContentWrapper
			title="Admin"
			content={
				<Form>
					{errors && (
						<Message negative>
							The Following Fields need to be completed:{' '}
							<List bulleted>
								{errors.map(error => {
									return <List.Item key={error}>{error}</List.Item>;
								})}
							</List>
						</Message>
					)}
					<Form.Group widths="equal">
						<Form.Input
							label="Name"
							placeholder="Writing-on-Stone / Áísínai’pi"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, name: event.currentTarget.value});
							}}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							label="Latitude"
							placeholder="49.081944"
							required
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, latitude: parseFloat(event.currentTarget.value)});
							}}
						/>
						<Form.Input
							label="Longitude"
							placeholder="-111.616944"
							required
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, longitude: parseFloat(event.currentTarget.value)});
							}}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Dropdown
							selection
							label="Country"
							placeholder="Canada"
							required
							type="number"
							onChange={(e, p) => {
								setHistoricSiteData({...historicSiteData, country: countries?.find(i => i.id === p.value)});
							}}
							options={
								countries?.map(country => {
									return {value: country.id, text: country.name, flag: country.code};
								}) || []
							}
						/>
						<Form.Dropdown
							selection
							label="State/Province"
							required
							placeholder="Manitoba"
							type="number"
							onChange={(e, p) => {
								setHistoricSiteData({...historicSiteData, state: states?.find(i => i.id === p.value)});
							}}
							options={
								states?.map(state => {
									return {value: state.id, text: state.name};
								}) || []
							}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.TextArea
							label="Content"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, content: event.currentTarget.value});
							}}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							label="Source"
							placeholder="https://en.wikipedia.org/wiki/Writing-on-Stone_Provincial_Park"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, source: event.currentTarget.value});
							}}
						/>
						<Form.Input
							label="Active Period Start"
							placeholder="-2550"
							required
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, activePeriodStart: parseInt(event.currentTarget.value, 10)});
							}}
						/>
						<Form.Input
							label="Active Period End"
							placeholder="1918"
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, activePeriodEnd: parseInt(event.currentTarget.value, 10)});
							}}
						/>
					</Form.Group>
					{historicSiteData?.designations?.map((designation, index) => {
						return (
							<Form.Group widths="equal" key={designation.id}>
								<Form.Input
									label="Official Name"
									placeholder="Writing-on-Stone / Áísínai’pi"
									required
									onChange={event => {
										const {designations} = historicSiteData;
										if (designations) {
											designations[index].officialName = event.currentTarget.value;
											setHistoricSiteData({...historicSiteData, designations});
										}
									}}
								/>
								<Form.Dropdown
									label="Type"
									selection
									options={[
										{
											text: DesignationTypeEnum.UnescoWorldHeritageSite,
											value: DesignationTypeEnum.UnescoWorldHeritageSite,
										},
										{
											text: DesignationTypeEnum.NationalHistoricSiteOfCanada,
											value: DesignationTypeEnum.NationalHistoricSiteOfCanada,
										},
										{
											text: DesignationTypeEnum.ProvincialHistoricSiteOfAlberta,
											value: DesignationTypeEnum.ProvincialHistoricSiteOfAlberta,
										},
									]}
									required
									onChange={(event, props) => {
										const {designations} = historicSiteData;
										if (designations) {
											designations[index].type = props.value as DesignationTypeEnum;
											setHistoricSiteData({...historicSiteData, designations});
										}
									}}
								/>

								<Form.Input
									label="Year"
									placeholder="2019"
									required
									type="number"
									onChange={event => {
										const {designations} = historicSiteData;
										if (designations) {
											designations[index].year = parseInt(event.currentTarget.value, 10);
											setHistoricSiteData({...historicSiteData, designations});
										}
									}}
								/>
								<Form.Input label="Action">
									<Button
										onClick={event => {
											if (historicSiteData?.designations) {
												const {designations} = historicSiteData;
												designations.splice(index, 1);
												setHistoricSiteData({
													...historicSiteData,
													designations,
												});
											}

											event.preventDefault();
										}}
										icon="delete"
									/>
								</Form.Input>
							</Form.Group>
						);
					})}
					<Form.Group widths="equal">
						<Button
							onClick={event => {
								if (historicSiteData?.designations) {
									setHistoricSiteData({
										...historicSiteData,
										designations: [
											...historicSiteData.designations,
											{id, version: 0, type: DesignationTypeEnum.UnescoWorldHeritageSite, year: 0, officialName: ''},
										],
									});
								} else {
									setHistoricSiteData({
										...historicSiteData,
										designations: [{id, version: 0, type: DesignationTypeEnum.UnescoWorldHeritageSite, year: 0, officialName: ''}],
									});
								}

								setId(id + 1);
								event.preventDefault();
							}}
						>
							Add Designation
						</Button>
					</Form.Group>
					<Form.Group>
						<Form.Input
							label="Featured Image"
							placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Head-Smashed-In_Buffalo_Jump-27527-2.jpg/1280px-Head-Smashed-In_Buffalo_Jump-27527-2.jpg"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, featuredImage: event.currentTarget.value});
							}}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Button positive onClick={() => submitHistoricSite()}>
							Submit
						</Button>
					</Form.Group>
				</Form>
			}
		/>
	);
}
