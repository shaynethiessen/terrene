import React, {useEffect, useState} from 'react';
import {Button, Form, List, Message} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import type {HistoricSiteTypeForm} from 'terrene-types';
import debug from 'debug';
import {DesignationTypeEnum} from 'terrene-types';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';

const d = debug('web.src.server');

export function Content() {
	const [submit, setSubmit] = useState(false);
	const [errors, setErrors] = useState<string[]>();
	const [runMigration, setRunMigration] = useState(false);
	const [historicSiteData, setHistoricSiteData] = useState<HistoricSiteTypeForm>();
	const [key, setKey] = useState(0);

	useEffect(() => {
		if (runMigration) {
			server.fetch('migrations/run').then(() => {
				setRunMigration(false);
				toast.success('Migration started!');
			});
		}
		if (submit) {
			const badFields: string[] = [];
			if (!historicSiteData?.content) badFields.push('Content');
			if (!historicSiteData?.name) badFields.push('Name');
			if (!historicSiteData?.attribution) badFields.push('Attribution');
			if (!historicSiteData?.activePeriodStart) badFields.push('Active Period Start');
			if (!historicSiteData?.latitude) badFields.push('Latitude');
			if (!historicSiteData?.longitude) badFields.push('Longitude');
			if (!historicSiteData?.designations) badFields.push('Designations');
			historicSiteData?.designations?.forEach(designation => {
				if (!designation.type) badFields.push('Type');
				if (!designation?.year) badFields.push('Year');
				if (!designation?.officialName) badFields.push('Official Name');
			});

			if (badFields.length === 0) {
				server.fetch('historic-site/add', historicSiteData).then(() => {
					setSubmit(false);
					setErrors(undefined);
					toast.success('Historic site submitted!');
				});
			} else {
				setErrors(badFields);
				setSubmit(false);
			}
		}
	}, [runMigration, submit, historicSiteData]);

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
							label="Attribution"
							placeholder="Source: www.unesco.org, License: CC-BY-SA IGO 3.0"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, attribution: event.currentTarget.value});
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
							<Form.Group widths="equal" key={designation.key}>
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
										designations: [...historicSiteData.designations, {key}],
									});
								} else {
									setHistoricSiteData({
										...historicSiteData,
										designations: [{key}],
									});
								}

								setKey(key + 1);
								event.preventDefault();
							}}
						>
							Add Designation
						</Button>
					</Form.Group>
					<Form.Group widths="equal">
						<Button positive onClick={() => setSubmit(true)}>
							Submit
						</Button>
					</Form.Group>
				</Form>
			}
			sidebar={
				<Button color="yellow" fluid onClick={() => setRunMigration(true)}>
					Run Migration
				</Button>
			}
		/>
	);
}
