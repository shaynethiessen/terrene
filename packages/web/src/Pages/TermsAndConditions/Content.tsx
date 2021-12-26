import React from 'react';
import {Header, List} from 'semantic-ui-react';
import {ContentWrapper} from '../../Layout';

export function Content() {
	return (
		<ContentWrapper
			title="Terms and Conditions"
			content={
				<>
					<p>
						These terms and conditions outline the rules and regulations for the use of Terrene&apos;s Website, located at www.terrene.ca. By
						accessing this website we assume you accept these terms and conditions. Do not continue to use Terrene if you do not agree to take all of
						the terms and conditions stated on this page.
					</p>
					<p>
						The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
						&quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company’s
						terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our
						Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer,
						acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner
						for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and
						subject to, prevailing law of Canada. Any use of the above terminology or other words in the singular, plural, capitalization and/or
						he/she or they, are taken as interchangeable and therefore as referring to same.
					</p>
					<Header as="h3">License</Header>
					<p>
						Unless otherwise stated, Terrene and/or its licensors own the intellectual property rights for all material on Terrene. All intellectual
						property rights are reserved. You may access this from Terrene for your own personal use subjected to restrictions set in these terms and
						conditions.
					</p>
					<p>You must not:</p>
					<List bulleted>
						<List.Item>Republish material from Terrene</List.Item>
						<List.Item>Sell, rent or sub-license material from Terrene</List.Item>
						<List.Item>Reproduce, duplicate or copy material from Terrene</List.Item>
						<List.Item>Redistribute content from Terrene</List.Item>
					</List>
					<p>This Agreement shall begin on the date hereof.</p>
					<p>
						Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.
						Terrene does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and
						opinions of Terrene,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
						To the extent permitted by applicable laws, Terrene shall not be liable for the Comments or for any liability, damages or expenses caused
						and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
					</p>
					<p>
						Terrene reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes
						breach of these Terms and Conditions.
					</p>
					<p>You warrant and represent that:</p>
					<List bulleted>
						<List.Item>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</List.Item>
						<List.Item>
							The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third
							party
						</List.Item>
						<List.Item>
							The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
						</List.Item>
						<List.Item>
							The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
						</List.Item>
					</List>
					<p>
						You hereby grant Terrene a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your
						Comments in any and all forms, formats or media.
					</p>
					<Header as="h3">iFrames</Header>
					<p>
						Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation
						or appearance of our Website.
					</p>
					<Header as="h3">Reservation of Rights</Header>
					<p>
						We also reserve the right to amend these terms and conditions at any time. By accessing our Website, you agree to be bound to and follow
						these terms and conditions.
					</p>
					<Header as="h3">Disclaimer</Header>
					<p>
						To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and
						the use of this website. Nothing in this disclaimer will:
					</p>
					<List bulleted>
						<List.Item>Limit or exclude our or your liability for death or personal injury</List.Item>
						<List.Item>Limit or exclude our or your liability for fraud or fraudulent</List.Item>
						<List.Item>Limit any of our or your liabilities in any way that is not permitted under applicable law, or</List.Item>
						<List.Item>Exclude any of our or your liabilities that may not be excluded under applicable law.</List.Item>
					</List>
					<p>
						The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding
						paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach
						of statutory duty.
					</p>
					<p>We will not be liable for any loss or damage of any nature.</p>
				</>
			}
		/>
	);
}
