import React, { Component } from 'react';
import classes from './PrivacyPolicyContainer.css';
import Hero from '../hero/HeroContainer.jsx';
import ContentBlockContainer from '../../../hoc/ui/ContentBlockContainer.jsx';
import ContentBlockImage from '../ContentBlock/ContentBlockImage.jsx';
import ContentBlockText from '../ContentBlock/ContentBlockText.jsx';
import ContentBlockWrapper from '../ContentBlock/ContentBlockWrapper.jsx';
import HighlightsBlock from '../Highlights/HighlightsBlock.jsx';
import HighlightsContainer from '../Highlights/HighlightsContainer.jsx';
import VisibiltyControl from '../../../hoc/VisibilityControl/VisibilityControl.jsx';

export class PrivacyPolicyContainer extends Component {
	render() {
		return (
			<div className={classes.contentContainer}>
				<VisibiltyControl>
					<ContentBlockContainer>
						<ContentBlockWrapper maxWidth="800px">
							<h1> Privacy policy</h1>
							<br />
							<h2>Welcome to Festbot’s Privacy Policy</h2>
							<br />
							<p>
								Hi there, we’re 1data Kft (HU 227 36 529) 245 Kiralyok Street Budapest, 1039, Hungary (“Festbot”) and welcome to our privacy policy. This policy sets out how we handle your personal information if you’re an
								Festbot user or visitor to our Sites. When we say ‘we’, ‘us’ or ‘Festbot’ it’s because that’s who we are and we own and run the Sites.
							</p>
							<p>
								If we say ‘policy’ we’re talking about this privacy policy. If we say ‘user terms’ we’re talking about the rules for using each of the Sites. The rules vary by product and each product makes them separately
								available and seeks consent to them separately to this policy.
							</p>
							<h4>The type of personal information we collect</h4>
							<p>We collect certain personal information about visitors and users of our Sites.</p>
							<p>
								The most common types of information we collect include things like: user-names, member names, email addresses, IP addresses, other contact details, survey responses, blogs, photos, payment information such
								as payment agent details, transactional details, tax information, support queries, forum comments, content you direct us to make available on our Sites (such as item descriptions) and web analytics data. We
								will also collect personal information from job applications (such as, your CV, the application form itself, cover letter and interview notes).
							</p>
							<h4>How we collect personal information</h4>
							<p />
							<p>
								We collect personal information directly when you provide it to us, automatically as you navigate through the Sites, or through other people when you use services associated with the Sites. We collect your
								personal information when you provide it to us when you complete membership registration and buy or provide items or services on our Sites, subscribe to a newsletter, email list, submit feedback, enter a
								contest, fill out a survey, or send us a communication.
							</p>
							<h4>Personal information we collect about you from others</h4>
							<p>
								Although we generally collect personal information directly from you, on occasion, we also collect certain categories of personal information about you from other sources. In particular: financial and/or
								transaction details from payment providers located in the US, UK, and Hungary in order to process a transaction; third party service providers (like Google, Facebook, Apple,Spotify) who are located in the US
								or UK, which may provide information about you when you link, connect, or login to your account with the third party provider and they send us information such as your registration and profile from that
								service, this only occurs if you are using Festbot. The information varies and is controlled by that service provider or as authorized by you via your privacy settings at that service provider; and other
								third party sources/ and or partners from Hungary, US or UK, whereby we receive additional information about you (to the extent permitted by applicable law), such as demographic data or fraud detection
								information, and combine it with information we have about you. For example, fraud warnings from service providers like identity verification service. We also receive information about you and your activities
								on and off the Festbot platform through partnerships, or about your experiences and interactions from our partner ad networks. We also receive information about you as a rights holder from our third party
								authors. For example, information in the form of a model release when your image is used in an item made available on our Sites.
							</p>
							<h4>How we use personal information</h4>
							<p>We will use your personal information:</p>
							<p>
								To fulfil a contract, or take steps linked to a contract: in particular, in facilitating and processing transactions that take place on the Sites. Where this is necessary for purposes which are in our, or
								third parties, legitimate interests. These interests include:
							</p>
							<ul>
								<li className={classes.simpleList}>operating the Sites;</li>
								<li className={classes.simpleList}>providing you with services described on the Sites;</li>
								<li className={classes.simpleList}>verifying your identity when you sign in to any of our Sites;</li>
								<li className={classes.simpleList}>responding to support tickets, and helping facilitate the resolution of any disputes;</li>
								<li className={classes.simpleList}>updating you with operational news and information about our Sites and services e.g. to notify you about changes to our Sites, website disruptions or security updates;</li>
								<li className={classes.simpleList}>carrying out technical analysis to determine how to improve the Sites and services we provide;</li>
								<li className={classes.simpleList}>monitoring activity on the Sites, e.g. to identify potential fraudulent activity and to ensure compliance with the user terms that apply to the Sites;</li>
								<li className={classes.simpleList}>
									managing our relationship with you, e.g. by responding to your comments or queries submitted to us on the Sites or asking for your feedback or whether you want to participate in a survey;
								</li>
								<li className={classes.simpleList}>managing our legal and operational affairs (including, managing risks relating to content and fraud matters);</li>
								<li className={classes.simpleList}>training Festbot staff about how to best serve our user community;</li>
								<li className={classes.simpleList}>improving our products and services.</li>
								<li className={classes.simpleList}>providing general administrative and performance functions and activities;</li>
								<li className={classes.simpleList}>and processing your job application to Festbot.</li>
							</ul>

							<h4>Where you give us consent:</h4>
							<p>
								providing you with marketing information about products and services which we feel may interest you; and customising our services and websites, like advertising that appear on the Site – where this involves
								the use of cookies or similar technologies – in order to provide a more personalised experience. For purposes which are required by law. For the purpose of responding to requests by government, a court of
								law, or law enforcement authorities conducting an investigation.
							</p>
							<h4>When we disclose your personal information</h4>
							<p>
								We will disclose personal information to the following recipients: companies that are in the Festbot group which are located in Hungary; authors of any items or services made available to you; subcontractors
								and service providers who assist us in connection with the ways we use personal information (as set out above), in particular: website hosting providers which are located in Hungary, US, NL and UK; technical
								and customer support services which are located in Hungary; recruitment agencies which are located in Hungary.
							</p>
							<ul>
								<li className={classes.simpleList}>our professional advisers (lawyers, accountants, financial advisers etc.) which are located in Hungary;</li>
								<li className={classes.simpleList}>regulators and government authorities in connection with our compliance procedures and obligations;</li>

								<li className={classes.simpleList}>a third party to respond to requests relating to a criminal investigation or alleged or suspected illegal activity;</li>
								<li className={classes.simpleList}>a third party, in order to enforce or defend our rights, or to address financial or reputational risks;</li>
								<li className={classes.simpleList}>a rights holder in relation to an allegation of intellectual property infringement or any other infringement; </li>
								<li className={classes.simpleList}>and other recipients where we are authorised or required by law to do so.</li>
							</ul>

							<h4>Where we transfer and/or store your personal information</h4>
							<p>
								We are based in Hungary so your data will be processed in Hungary and the US. Some of the recipients we have described in section 10 above, and to whom we disclose your personal information, are based outside
								Hungary in places like Canada, Ireland, Philippines, Poland, Romania, UK, and the US. We do this on the basis of your consent to this policy.In order to protect your information, we take care where possible
								to work with subcontractors and service providers who we believe maintain an acceptable standard of data security compliance.
							</p>
							<h4>How we keep your personal information secure</h4>
							<p>
								We store personal information on secure servers that are managed by us and our service providers, and occasionally hard copy files that are kept in a secure location in Hungary, Ireland and the US. Personal
								information that we store or transmit is protected by security and access controls, including username and password authentication, two-factor authentication, and data encryption where appropriate.
							</p>
							<h4>How you can access your personal information</h4>
							<p>
								You can access some of the personal information that we collect about you by logging in to your account. You also have the right to make a request to access other personal information we hold about you and to
								request corrections of any errors in that data. You can also close the account you have with us for any of our Sites at any time. To make an access or correction request, contact our privacy champion using
								the contact details at the end of this policy.
							</p>
							<h4>Marketing Choices regarding your personal information</h4>
							<p>
								Where we have your consent to do so (e.g. if you have subscribed to one of our e-mail lists or have indicated that you are interested in receiving offers or information from us), we send you marketing
								communications by email about products and services that we feel may be of interest to you. You can ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the
								“unsubscribe” facility provided in the communication itself.
							</p>
							<p>
								You also have choices about cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you
								choose to reject cookies some parts of our Sites may not work properly in your case.
							</p>
							<h4>Cookies (not the type you eat!) and web analytics</h4>
							<p>For more information about how we use cookies, web beacons and similar technologies see our cookie policy here and for more general information on cookies, see http://www.allaboutcookies.org.</p>
							<p>
								When you visit our Sites, there’s certain information that’s recorded which is generally anonymous information and does not reveal your identity. If you’re logged into your account some of this information
								could be associated with your account. We’re talking about the following kinds of details:
							</p>
							<ul>
								<li className={classes.simpleList}>your IP address or proxy server IP address’;</li>
								<li className={classes.simpleList}>the domain name you requested;</li>
								<li className={classes.simpleList}>the name of your internet service provider is sometimes captured depending on the configuration of your ISP connection;</li>
								<li className={classes.simpleList}>the date and time of your visit to the website;</li>
								<li className={classes.simpleList}>the length of your session;</li>
								<li className={classes.simpleList}>the pages which you have accessed;</li>
								<li className={classes.simpleList}>the number of times you access our site within any month;</li>
								<li className={classes.simpleList}>the file URL you look at and information relating to it;</li>
								<li className={classes.simpleList}>the website which referred you to our Sites; </li>
								<li className={classes.simpleList}>and the operating system which your computer uses.</li>
							</ul>

							<p>
								Occasionally, we will use third party advertising companies to serve ads based on prior visits to our Sites. For example, if you visit our Sites, you may later see an add for our products and services when
								you visit a different Site. Read more about your options in our cookie policy.
							</p>
							<h4>Information about children</h4>
							<p>
								Our Sites are not suitable for children under the age of 16 years, so if you are under 16 we ask that you do not use our Sites or give us your personal information (if you are a young tech wiz, please direct
								your nearest responsible adult to use the Sites for you!). If you are from 16 to 18 years, you can browse the Sites but you’ll need the supervision of a parent or guardian to become a registered user. It’s
								the responsibility of parents or guardians to monitor their children’s use of our Sites.
							</p>
							<h4>Information you make public or give to others</h4>
							<p>
								If you make your personal information available to other people, we can’t control or accept responsibility for the way they will use or manage that data. There are lots of ways that you can find yourself
								providing information to other people, like when you post a public message on a forum thread, share information via social media, or make contact with another user (such as a third party Author) whether via
								our Sites or directly via email. Before making your information publicly available or giving your information to anyone else, think carefully. If giving information to another user via our Sites, ask them how
								they will handle your information. If you’re sharing information via another website, check the privacy policy for that site to understand its information management practices as this privacy policy will not
								apply.
							</p>
							<h4>How long we keep your personal information</h4>
							<p>
								We retain your personal information for as long as is necessary to provide the services to you and others, and to comply with our legal obligations. If you no longer want us to use your personal information
								or to provide you with the Festbot services, you can request that we erase your personal information and close your Festbot account. Please note that if you request the erasure of your personal information we
								will retain information from deleted accounts as necessary for our legitimate business interests, to comply with the law, prevent fraud, collect fees, resolve disputes, troubleshoot problems, assist with
								investigations, enforce the terms of service and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.
							</p>
							<h4>When we need to update this policy</h4>
							<p>
								We will need to change this policy from time to time in order to make sure it stays up to date with the latest legal requirements and any changes to our privacy management practices. When we do change the
								policy, we’ll make sure to notify you about such changes, where required. A copy of the latest version of this policy will always be available on this page.
							</p>
							<h4>How you can contact us</h4>
							<p>
								If you have any questions about our privacy practices or the way in which we have been managing your personal information, please contact our privacy champion in writing at info@festbot.com. We’re really glad
								you made it to the end of the privacy policy, because knowing this stuff is the best way to understand how your personal information is used and how to best manage it!
							</p>
							<p>If you’re a user or visitor in the European Economic Area these rights also apply to you:</p>
							<p>For the purposes of applicable EU data protection law (including the General Data Protection Regulation 2016/679 (the “GDPR”), we are a ‘data controller’ of your personal information.</p>
							<h4>How you can access your personal information</h4>
							<p>
								You are also entitled to ask us to port your personal information (i.e. to transfer in a structured, commonly used and machine-readable format, to you), to erase it, or restrict its processing. You also have
								rights to object to some processing that is based on our legitimate interests, such as profiling that we perform for the purposes of direct marketing, and, where we have asked for your consent to process your
								data, to withdraw this consent as more fully described below.
							</p>
							<p>
								These rights are limited in some situations – for example, we can demonstrate that we have a legal requirement to process your personal information. In some instances, this means that we may retain some data
								even if you withdraw your consent.
							</p>
							<p>
								Where we require your personal information to comply with legal or contractual obligations, then provision of such data is mandatory: if such data is not provided, then we will not be able to manage our
								contractual relationship with you, or to meet obligations placed on us. In all other cases, provision of requested personal information is optional.
							</p>
							<p>
								If you have unresolved concerns you also have the right to complain to data protection authorities. The relevant data protection authority will be the data protection authority of the country: (i) of your
								habitual residence; (ii) of your place of work; or (iii) in which you consider the alleged infringement has occurred.
							</p>
							<p>Both personal information and personal data have the same meaning in the context of this Privacy Policy.</p>
							<p>Festbot Privacy Policy v1, effective date 25 May 2018</p>
						</ContentBlockWrapper>
					</ContentBlockContainer>
				</VisibiltyControl>
			</div>
		);
	}
}

export default PrivacyPolicyContainer;
