import debug from 'debug';
import React from 'react';
import {Header, List} from 'semantic-ui-react';
import {ContentWrapper} from '../../Layout';

const d = debug('terrene.web.Pages.PrivacyPolicy.Content');

export function Content() {
	return (
		<ContentWrapper
			title="Privacy Policy"
			content={
				<>
					<p>
						At Terrene, accessible from www.terrene.ca, one of our main priorities is the privacy of our visitors. This Privacy Policy document
						contains types of information that is collected and recorded by Terrene and how we use it. If you have additional questions or require
						more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is
						valid for visitors to our website with regards to the information that they shared and/or collect in Terrene.
					</p>
					<Header as="h3">Consent</Header>
					<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
					<Header as="h3">Information We Collect</Header>
					<p>
						The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the
						point we ask you to provide your personal information.
					</p>
					<p>
						If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents
						of the message and/or attachments you may send us, and any other information you may choose to provide.
					</p>
					<p>
						When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email
						address, and telephone number.
					</p>
					<Header as="h3">How We Use Your Information</Header>
					<p>We use the information we collect in various ways, including to:</p>
					<List bulleted>
						<List.Item>Provide, operate, and maintain our website</List.Item>
						<List.Item>Improve, personalize, and expand our website</List.Item>
						<List.Item>Understand and analyze how you use our website</List.Item>
						<List.Item>Develop new products, services, features, and functionality</List.Item>
						<List.Item>
							Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and
							other information relating to the website, and for marketing and promotional purposes
						</List.Item>
						<List.Item>Send you emails</List.Item>
						<List.Item>Find and prevent fraud</List.Item>
					</List>
					<Header as="h3">Log Files</Header>
					<p>
						Terrene follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this
						and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser
						type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked
						to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site,
						tracking users&apos; movement on the website, and gathering demographic information.
					</p>
					<Header as="h3">Cookies</Header>
					<p>
						Like any other website, Terrene uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos;
						preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos;
						experience by customizing our web page content based on visitors&apos; browser type and/or other information. For more general information
						on cookies, please read the Cookies article on Generate Privacy Policy website.
					</p>
					<Header as="h3">Google DoubleClick DART Cookie</Header>
					<p>
						Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based
						upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by
						visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
					</p>
					<Header as="h3">Our Advertising Partners</Header>
					<p>
						Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising
						partners has their own Privacy Policy for their policies on user data.
					</p>
					<Header as="h3">Third Party Privacy Policies</Header>
					<p>
						Terrene&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy
						Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to
						opt-out of certain options.
					</p>
					<p>
						You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with
						specific web browsers, it can be found at the browsers&apos; respective websites.
					</p>
					<Header as="h3">Children&apos;s Information</Header>
					<p>
						Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe,
						participate in, and/or monitor and guide their online activity.
					</p>
					<p>
						Terrene does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child
						provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to
						promptly remove such information from our records.
					</p>
				</>
			}
		/>
	);
}
