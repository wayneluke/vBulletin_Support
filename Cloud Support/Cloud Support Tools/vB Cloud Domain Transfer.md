
Customer sends a Support ticket requesting to transfer a resold domain out of vBulletin. - Advise customer that we will provision a transfer authorization code for the requested domain. - Customer will need to sort it out with their registrar on how to submit a domain transfer request using the provided authorization code.

Go to Support Tool > Search for the site in Forum Actions > Site Info > Domain Resell. - Use the provided credentials to log into the Registrar Administration Portal. - In the Registrar Administration Portal, go to my domains > select the domain to be transferred.

Go to General Settings. - Disable “Registrar-Lock”. - Make sure the 60 Day Lock status is “Not Locked”. If this status is locked, the domain cannot be transferred yet.

   - Note: There is currently a bug with the 60 Day Lock status: Even if the 60 Day Lock status is “Unlocked”, the transfer cannot proceed if 60 days did not actually pass since the domain was registered. 

- Click on “Generate Auth Code”. - Then, click on “Email Auth Code to Registrant”. (A copy of the generated Auth code will be emailed to VBSAAS/VBC team).

   - Note: You can re-generate Auth Code if you lost the previous one. However, make sure to click “Email Auth Code to Registrant” after every time a new Auth Code is generated for bookkeeping. 

- Provision the generated Authorization Code to customer. - Create a VBSAAS ticket with the following information:

   - Issue Type: Task
   - Summary: Domain Transfer for <domain name>
   - Priority: Minor
   - Fix Version:Support Issues
   - Description: 
       - Includes the link to the original customer support ticket requesting for the domain transfer.
       - Confirms that the transfer authorization code has been provisioned to the customer. (Do not include the actual authorization code in this ticket)
       - Once customer submits the transfer request on their side of registrar with the provisioned authorization code, an email will be sent from customer’s registrar to our domain management mailbox. A member from the VBSAAS/VBC team will process the email and mark the VBSAAS ticket accordingly.