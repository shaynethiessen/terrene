import React, {useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import type {HistoricSiteTypeForm} from 'terrene-types';
import debug from 'debug';
import {DesignationTypeEnum} from 'terrene-types';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';

const d = debug('web.src.server');

export function Content() {
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
	}, [runMigration]);

	return (
		<ContentWrapper
			title="Admin"
			content={
				<Form>
					<Form.Group widths="equal">
						<Form.Input
							label="Name"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, name: event.currentTarget.value});
							}}
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							label="Latitude"
							required
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, latitude: parseFloat(event.currentTarget.value)});
							}}
						/>
						<Form.Input
							label="Longitude"
							required
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, longitude: parseFloat(event.currentTarget.value)});
							}}
						/>
						<Form.Input
							label="Slug"
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, slug: event.currentTarget.value});
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
							required
							onChange={event => {
								setHistoricSiteData({...historicSiteData, attribution: event.currentTarget.value});
							}}
						/>
						<Form.Input
							label="Active Period Start (year)"
							required
							type="number"
							onChange={event => {
								setHistoricSiteData({...historicSiteData, activePeriodStart: parseInt(event.currentTarget.value, 10)});
							}}
						/>
						<Form.Input
							label="Active Period End (year)"
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
											d(designation.officialName);
											d(historicSiteData.designations);
											d(historicSiteData.designations?.filter(i => i.officialName !== designation.officialName));
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
						<Button positive onClick={() => d(historicSiteData)}>
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
