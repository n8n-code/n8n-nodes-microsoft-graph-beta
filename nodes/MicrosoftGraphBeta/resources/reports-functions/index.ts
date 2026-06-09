import type { INodeProperties } from 'n8n-workflow';

export const reportsFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					]
				}
			},
			"options": [
				{
					"name": "Reports Authentication Methods Users Registered By Feature 1 B 6 A",
					"value": "Reports Authentication Methods Users Registered By Feature 1 B 6 A",
					"action": "Invoke function usersRegisteredByFeature",
					"description": "Invoke function usersRegisteredByFeature",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods/microsoft.graph.usersRegisteredByFeature()"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Users Registered By Feature 833 A",
					"value": "Reports Authentication Methods Users Registered By Feature 833 A",
					"action": "Invoke function usersRegisteredByFeature",
					"description": "Invoke function usersRegisteredByFeature",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods/microsoft.graph.usersRegisteredByFeature(includedUserTypes='{{$parameter[\"includedUserTypes\"]}}',includedUserRoles='{{$parameter[\"includedUserRoles\"]}}')"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Users Registered By Method C 68 E",
					"value": "Reports Authentication Methods Users Registered By Method C 68 E",
					"action": "Invoke function usersRegisteredByMethod",
					"description": "Invoke function usersRegisteredByMethod",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods/microsoft.graph.usersRegisteredByMethod()"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Users Registered By Method A 200",
					"value": "Reports Authentication Methods Users Registered By Method A 200",
					"action": "Invoke function usersRegisteredByMethod",
					"description": "Invoke function usersRegisteredByMethod",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods/microsoft.graph.usersRegisteredByMethod(includedUserTypes='{{$parameter[\"includedUserTypes\"]}}',includedUserRoles='{{$parameter[\"includedUserRoles\"]}}')"
						}
					}
				},
				{
					"name": "Reports Device Configuration Device Activity",
					"value": "Reports Device Configuration Device Activity",
					"action": "Invoke function deviceConfigurationDeviceActivity",
					"description": "Metadata for the device configuration device activity report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.deviceConfigurationDeviceActivity()"
						}
					}
				},
				{
					"name": "Reports Device Configuration User Activity",
					"value": "Reports Device Configuration User Activity",
					"action": "Invoke function deviceConfigurationUserActivity",
					"description": "Metadata for the device configuration user activity report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.deviceConfigurationUserActivity()"
						}
					}
				},
				{
					"name": "Reports Get Azure AD Application Sign In Summary",
					"value": "Reports Get Azure AD Application Sign In Summary",
					"action": "Invoke function getAzureADApplicationSignInSummary",
					"description": "Invoke function getAzureADApplicationSignInSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getAzureADApplicationSignInSummary(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Browser Distribution User Counts",
					"value": "Reports Get Browser Distribution User Counts",
					"action": "Invoke function getBrowserDistributionUserCounts",
					"description": "Invoke function getBrowserDistributionUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getBrowserDistributionUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Browser User Counts",
					"value": "Reports Get Browser User Counts",
					"action": "Invoke function getBrowserUserCounts",
					"description": "Invoke function getBrowserUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getBrowserUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Browser User Detail",
					"value": "Reports Get Browser User Detail",
					"action": "Invoke function getBrowserUserDetail",
					"description": "Invoke function getBrowserUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getBrowserUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Credential Usage Summary",
					"value": "Reports Get Credential Usage Summary",
					"action": "Invoke function getCredentialUsageSummary",
					"description": "Invoke function getCredentialUsageSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getCredentialUsageSummary(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Credential User Registration Count",
					"value": "Reports Get Credential User Registration Count",
					"action": "Invoke function getCredentialUserRegistrationCount",
					"description": "Report the current state of how many users in your organization are registered for self-service password reset and multi-factor authentication (MFA) capabilities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getCredentialUserRegistrationCount()"
						}
					}
				},
				{
					"name": "Reports Get Email Activity Counts",
					"value": "Reports Get Email Activity Counts",
					"action": "Invoke function getEmailActivityCounts",
					"description": "Invoke function getEmailActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Email Activity User Counts",
					"value": "Reports Get Email Activity User Counts",
					"action": "Invoke function getEmailActivityUserCounts",
					"description": "Invoke function getEmailActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Email Activity User Detail Fe 32",
					"value": "Reports Get Email Activity User Detail Fe 32",
					"action": "Invoke function getEmailActivityUserDetail",
					"description": "Invoke function getEmailActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Email Activity User Detail Dcb 6",
					"value": "Reports Get Email Activity User Detail Dcb 6",
					"action": "Invoke function getEmailActivityUserDetail",
					"description": "Invoke function getEmailActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Email App Usage Apps User Counts",
					"value": "Reports Get Email App Usage Apps User Counts",
					"action": "Invoke function getEmailAppUsageAppsUserCounts",
					"description": "Invoke function getEmailAppUsageAppsUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailAppUsageAppsUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Email App Usage User Counts",
					"value": "Reports Get Email App Usage User Counts",
					"action": "Invoke function getEmailAppUsageUserCounts",
					"description": "Invoke function getEmailAppUsageUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailAppUsageUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Email App Usage User Detail 62 Ec",
					"value": "Reports Get Email App Usage User Detail 62 Ec",
					"action": "Invoke function getEmailAppUsageUserDetail",
					"description": "Invoke function getEmailAppUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailAppUsageUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Email App Usage User Detail A 0 Ff",
					"value": "Reports Get Email App Usage User Detail A 0 Ff",
					"action": "Invoke function getEmailAppUsageUserDetail",
					"description": "Invoke function getEmailAppUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailAppUsageUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Email App Usage Versions User Counts",
					"value": "Reports Get Email App Usage Versions User Counts",
					"action": "Invoke function getEmailAppUsageVersionsUserCounts",
					"description": "Invoke function getEmailAppUsageVersionsUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getEmailAppUsageVersionsUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Forms User Activity Counts",
					"value": "Reports Get Forms User Activity Counts",
					"action": "Invoke function getFormsUserActivityCounts",
					"description": "Invoke function getFormsUserActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getFormsUserActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Forms User Activity User Counts",
					"value": "Reports Get Forms User Activity User Counts",
					"action": "Invoke function getFormsUserActivityUserCounts",
					"description": "Invoke function getFormsUserActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getFormsUserActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Forms User Activity User Detail 688 A",
					"value": "Reports Get Forms User Activity User Detail 688 A",
					"action": "Invoke function getFormsUserActivityUserDetail",
					"description": "Invoke function getFormsUserActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getFormsUserActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Forms User Activity User Detail 86 D 0",
					"value": "Reports Get Forms User Activity User Detail 86 D 0",
					"action": "Invoke function getFormsUserActivityUserDetail",
					"description": "Invoke function getFormsUserActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getFormsUserActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Group Archived Print Jobs",
					"value": "Reports Get Group Archived Print Jobs",
					"action": "Invoke function getGroupArchivedPrintJobs",
					"description": "Invoke function getGroupArchivedPrintJobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getGroupArchivedPrintJobs(groupId='{{$parameter[\"groupId\"]}}',startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Reports Get M 365 App Platform User Counts",
					"value": "Reports Get M 365 App Platform User Counts",
					"action": "Invoke function getM365AppPlatformUserCounts",
					"description": "Invoke function getM365AppPlatformUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getM365AppPlatformUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get M 365 App User Counts",
					"value": "Reports Get M 365 App User Counts",
					"action": "Invoke function getM365AppUserCounts",
					"description": "Invoke function getM365AppUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getM365AppUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get M 365 App User Detail 2 B 20",
					"value": "Reports Get M 365 App User Detail 2 B 20",
					"action": "Invoke function getM365AppUserDetail",
					"description": "Invoke function getM365AppUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getM365AppUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get M 365 App User Detail 3 B 6 B",
					"value": "Reports Get M 365 App User Detail 3 B 6 B",
					"action": "Invoke function getM365AppUserDetail",
					"description": "Invoke function getM365AppUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getM365AppUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Mailbox Usage Detail",
					"value": "Reports Get Mailbox Usage Detail",
					"action": "Invoke function getMailboxUsageDetail",
					"description": "Invoke function getMailboxUsageDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getMailboxUsageDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Mailbox Usage Mailbox Counts",
					"value": "Reports Get Mailbox Usage Mailbox Counts",
					"action": "Invoke function getMailboxUsageMailboxCounts",
					"description": "Invoke function getMailboxUsageMailboxCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getMailboxUsageMailboxCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Mailbox Usage Quota Status Mailbox Counts",
					"value": "Reports Get Mailbox Usage Quota Status Mailbox Counts",
					"action": "Invoke function getMailboxUsageQuotaStatusMailboxCounts",
					"description": "Invoke function getMailboxUsageQuotaStatusMailboxCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getMailboxUsageQuotaStatusMailboxCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Mailbox Usage Storage",
					"value": "Reports Get Mailbox Usage Storage",
					"action": "Invoke function getMailboxUsageStorage",
					"description": "Invoke function getMailboxUsageStorage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getMailboxUsageStorage(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Activation Counts",
					"value": "Reports Get Office 365 Activation Counts",
					"action": "Invoke function getOffice365ActivationCounts",
					"description": "Invoke function getOffice365ActivationCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ActivationCounts()"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Activations User Counts",
					"value": "Reports Get Office 365 Activations User Counts",
					"action": "Invoke function getOffice365ActivationsUserCounts",
					"description": "Invoke function getOffice365ActivationsUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ActivationsUserCounts()"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Activations User Detail",
					"value": "Reports Get Office 365 Activations User Detail",
					"action": "Invoke function getOffice365ActivationsUserDetail",
					"description": "Invoke function getOffice365ActivationsUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ActivationsUserDetail()"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Active User Counts",
					"value": "Reports Get Office 365 Active User Counts",
					"action": "Invoke function getOffice365ActiveUserCounts",
					"description": "Invoke function getOffice365ActiveUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ActiveUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Active User Detail D 389",
					"value": "Reports Get Office 365 Active User Detail D 389",
					"action": "Invoke function getOffice365ActiveUserDetail",
					"description": "Invoke function getOffice365ActiveUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ActiveUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Active User Detail 285 F",
					"value": "Reports Get Office 365 Active User Detail 285 F",
					"action": "Invoke function getOffice365ActiveUserDetail",
					"description": "Invoke function getOffice365ActiveUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ActiveUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Groups Activity Counts",
					"value": "Reports Get Office 365 Groups Activity Counts",
					"action": "Invoke function getOffice365GroupsActivityCounts",
					"description": "Invoke function getOffice365GroupsActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365GroupsActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Groups Activity Detail 81 Cc",
					"value": "Reports Get Office 365 Groups Activity Detail 81 Cc",
					"action": "Invoke function getOffice365GroupsActivityDetail",
					"description": "Invoke function getOffice365GroupsActivityDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365GroupsActivityDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Groups Activity Detail 50 Ef",
					"value": "Reports Get Office 365 Groups Activity Detail 50 Ef",
					"action": "Invoke function getOffice365GroupsActivityDetail",
					"description": "Invoke function getOffice365GroupsActivityDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365GroupsActivityDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Groups Activity File Counts",
					"value": "Reports Get Office 365 Groups Activity File Counts",
					"action": "Invoke function getOffice365GroupsActivityFileCounts",
					"description": "Invoke function getOffice365GroupsActivityFileCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365GroupsActivityFileCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Groups Activity Group Counts",
					"value": "Reports Get Office 365 Groups Activity Group Counts",
					"action": "Invoke function getOffice365GroupsActivityGroupCounts",
					"description": "Invoke function getOffice365GroupsActivityGroupCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365GroupsActivityGroupCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Groups Activity Storage",
					"value": "Reports Get Office 365 Groups Activity Storage",
					"action": "Invoke function getOffice365GroupsActivityStorage",
					"description": "Invoke function getOffice365GroupsActivityStorage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365GroupsActivityStorage(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Office 365 Services User Counts",
					"value": "Reports Get Office 365 Services User Counts",
					"action": "Invoke function getOffice365ServicesUserCounts",
					"description": "Invoke function getOffice365ServicesUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOffice365ServicesUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Activity File Counts",
					"value": "Reports Get One Drive Activity File Counts",
					"action": "Invoke function getOneDriveActivityFileCounts",
					"description": "Invoke function getOneDriveActivityFileCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveActivityFileCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Activity User Counts",
					"value": "Reports Get One Drive Activity User Counts",
					"action": "Invoke function getOneDriveActivityUserCounts",
					"description": "Invoke function getOneDriveActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Activity User Detail 05 F 1",
					"value": "Reports Get One Drive Activity User Detail 05 F 1",
					"action": "Invoke function getOneDriveActivityUserDetail",
					"description": "Invoke function getOneDriveActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get One Drive Activity User Detail 38 E 5",
					"value": "Reports Get One Drive Activity User Detail 38 E 5",
					"action": "Invoke function getOneDriveActivityUserDetail",
					"description": "Invoke function getOneDriveActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Usage Account Counts",
					"value": "Reports Get One Drive Usage Account Counts",
					"action": "Invoke function getOneDriveUsageAccountCounts",
					"description": "Invoke function getOneDriveUsageAccountCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveUsageAccountCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Usage Account Detail E 827",
					"value": "Reports Get One Drive Usage Account Detail E 827",
					"action": "Invoke function getOneDriveUsageAccountDetail",
					"description": "Invoke function getOneDriveUsageAccountDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveUsageAccountDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get One Drive Usage Account Detail 9341",
					"value": "Reports Get One Drive Usage Account Detail 9341",
					"action": "Invoke function getOneDriveUsageAccountDetail",
					"description": "Invoke function getOneDriveUsageAccountDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveUsageAccountDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Usage File Counts",
					"value": "Reports Get One Drive Usage File Counts",
					"action": "Invoke function getOneDriveUsageFileCounts",
					"description": "Invoke function getOneDriveUsageFileCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveUsageFileCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get One Drive Usage Storage",
					"value": "Reports Get One Drive Usage Storage",
					"action": "Invoke function getOneDriveUsageStorage",
					"description": "Invoke function getOneDriveUsageStorage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getOneDriveUsageStorage(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Printer Archived Print Jobs",
					"value": "Reports Get Printer Archived Print Jobs",
					"action": "Invoke function getPrinterArchivedPrintJobs",
					"description": "Invoke function getPrinterArchivedPrintJobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getPrinterArchivedPrintJobs(printerId='{{$parameter[\"printerId\"]}}',startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Relying Party Detailed Summary",
					"value": "Reports Get Relying Party Detailed Summary",
					"action": "Invoke function getRelyingPartyDetailedSummary",
					"description": "Invoke function getRelyingPartyDetailedSummary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getRelyingPartyDetailedSummary(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Activity File Counts",
					"value": "Reports Get Share Point Activity File Counts",
					"action": "Invoke function getSharePointActivityFileCounts",
					"description": "Invoke function getSharePointActivityFileCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointActivityFileCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Activity Pages",
					"value": "Reports Get Share Point Activity Pages",
					"action": "Invoke function getSharePointActivityPages",
					"description": "Invoke function getSharePointActivityPages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointActivityPages(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Activity User Counts",
					"value": "Reports Get Share Point Activity User Counts",
					"action": "Invoke function getSharePointActivityUserCounts",
					"description": "Invoke function getSharePointActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Activity User Detail F 3 Be",
					"value": "Reports Get Share Point Activity User Detail F 3 Be",
					"action": "Invoke function getSharePointActivityUserDetail",
					"description": "Invoke function getSharePointActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Share Point Activity User Detail E 8 D 6",
					"value": "Reports Get Share Point Activity User Detail E 8 D 6",
					"action": "Invoke function getSharePointActivityUserDetail",
					"description": "Invoke function getSharePointActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Site Usage Detail D 27 A",
					"value": "Reports Get Share Point Site Usage Detail D 27 A",
					"action": "Invoke function getSharePointSiteUsageDetail",
					"description": "Invoke function getSharePointSiteUsageDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointSiteUsageDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Share Point Site Usage Detail Bfde",
					"value": "Reports Get Share Point Site Usage Detail Bfde",
					"action": "Invoke function getSharePointSiteUsageDetail",
					"description": "Invoke function getSharePointSiteUsageDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointSiteUsageDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Site Usage File Counts",
					"value": "Reports Get Share Point Site Usage File Counts",
					"action": "Invoke function getSharePointSiteUsageFileCounts",
					"description": "Invoke function getSharePointSiteUsageFileCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointSiteUsageFileCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Site Usage Pages",
					"value": "Reports Get Share Point Site Usage Pages",
					"action": "Invoke function getSharePointSiteUsagePages",
					"description": "Invoke function getSharePointSiteUsagePages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointSiteUsagePages(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Site Usage Site Counts",
					"value": "Reports Get Share Point Site Usage Site Counts",
					"action": "Invoke function getSharePointSiteUsageSiteCounts",
					"description": "Invoke function getSharePointSiteUsageSiteCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointSiteUsageSiteCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Share Point Site Usage Storage",
					"value": "Reports Get Share Point Site Usage Storage",
					"action": "Invoke function getSharePointSiteUsageStorage",
					"description": "Invoke function getSharePointSiteUsageStorage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSharePointSiteUsageStorage(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Activity Counts",
					"value": "Reports Get Skype For Business Activity Counts",
					"action": "Invoke function getSkypeForBusinessActivityCounts",
					"description": "Invoke function getSkypeForBusinessActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Activity User Counts",
					"value": "Reports Get Skype For Business Activity User Counts",
					"action": "Invoke function getSkypeForBusinessActivityUserCounts",
					"description": "Invoke function getSkypeForBusinessActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Activity User Detail E 4 C 9",
					"value": "Reports Get Skype For Business Activity User Detail E 4 C 9",
					"action": "Invoke function getSkypeForBusinessActivityUserDetail",
					"description": "Invoke function getSkypeForBusinessActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Activity User Detail 2550",
					"value": "Reports Get Skype For Business Activity User Detail 2550",
					"action": "Invoke function getSkypeForBusinessActivityUserDetail",
					"description": "Invoke function getSkypeForBusinessActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Device Usage Distribution User Counts",
					"value": "Reports Get Skype For Business Device Usage Distribution User Counts",
					"action": "Invoke function getSkypeForBusinessDeviceUsageDistributionUserCounts",
					"description": "Invoke function getSkypeForBusinessDeviceUsageDistributionUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessDeviceUsageDistributionUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Device Usage User Counts",
					"value": "Reports Get Skype For Business Device Usage User Counts",
					"action": "Invoke function getSkypeForBusinessDeviceUsageUserCounts",
					"description": "Invoke function getSkypeForBusinessDeviceUsageUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Device Usage User Detail A 692",
					"value": "Reports Get Skype For Business Device Usage User Detail A 692",
					"action": "Invoke function getSkypeForBusinessDeviceUsageUserDetail",
					"description": "Invoke function getSkypeForBusinessDeviceUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Device Usage User Detail 0 C 42",
					"value": "Reports Get Skype For Business Device Usage User Detail 0 C 42",
					"action": "Invoke function getSkypeForBusinessDeviceUsageUserDetail",
					"description": "Invoke function getSkypeForBusinessDeviceUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Organizer Activity Counts",
					"value": "Reports Get Skype For Business Organizer Activity Counts",
					"action": "Invoke function getSkypeForBusinessOrganizerActivityCounts",
					"description": "Invoke function getSkypeForBusinessOrganizerActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessOrganizerActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Organizer Activity Minute Counts",
					"value": "Reports Get Skype For Business Organizer Activity Minute Counts",
					"action": "Invoke function getSkypeForBusinessOrganizerActivityMinuteCounts",
					"description": "Invoke function getSkypeForBusinessOrganizerActivityMinuteCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessOrganizerActivityMinuteCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Organizer Activity User Counts",
					"value": "Reports Get Skype For Business Organizer Activity User Counts",
					"action": "Invoke function getSkypeForBusinessOrganizerActivityUserCounts",
					"description": "Invoke function getSkypeForBusinessOrganizerActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessOrganizerActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Participant Activity Counts",
					"value": "Reports Get Skype For Business Participant Activity Counts",
					"action": "Invoke function getSkypeForBusinessParticipantActivityCounts",
					"description": "Invoke function getSkypeForBusinessParticipantActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessParticipantActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Participant Activity Minute Counts",
					"value": "Reports Get Skype For Business Participant Activity Minute Counts",
					"action": "Invoke function getSkypeForBusinessParticipantActivityMinuteCounts",
					"description": "Invoke function getSkypeForBusinessParticipantActivityMinuteCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessParticipantActivityMinuteCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Participant Activity User Counts",
					"value": "Reports Get Skype For Business Participant Activity User Counts",
					"action": "Invoke function getSkypeForBusinessParticipantActivityUserCounts",
					"description": "Invoke function getSkypeForBusinessParticipantActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessParticipantActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Peer To Peer Activity Counts",
					"value": "Reports Get Skype For Business Peer To Peer Activity Counts",
					"action": "Invoke function getSkypeForBusinessPeerToPeerActivityCounts",
					"description": "Invoke function getSkypeForBusinessPeerToPeerActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Peer To Peer Activity Minute Counts",
					"value": "Reports Get Skype For Business Peer To Peer Activity Minute Counts",
					"action": "Invoke function getSkypeForBusinessPeerToPeerActivityMinuteCounts",
					"description": "Invoke function getSkypeForBusinessPeerToPeerActivityMinuteCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityMinuteCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Skype For Business Peer To Peer Activity User Counts",
					"value": "Reports Get Skype For Business Peer To Peer Activity User Counts",
					"action": "Invoke function getSkypeForBusinessPeerToPeerActivityUserCounts",
					"description": "Invoke function getSkypeForBusinessPeerToPeerActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Device Usage Distribution Total User Counts",
					"value": "Reports Get Teams Device Usage Distribution Total User Counts",
					"action": "Invoke function getTeamsDeviceUsageDistributionTotalUserCounts",
					"description": "Invoke function getTeamsDeviceUsageDistributionTotalUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsDeviceUsageDistributionTotalUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Device Usage Distribution User Counts",
					"value": "Reports Get Teams Device Usage Distribution User Counts",
					"action": "Invoke function getTeamsDeviceUsageDistributionUserCounts",
					"description": "Invoke function getTeamsDeviceUsageDistributionUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsDeviceUsageDistributionUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Device Usage Total User Counts",
					"value": "Reports Get Teams Device Usage Total User Counts",
					"action": "Invoke function getTeamsDeviceUsageTotalUserCounts",
					"description": "Invoke function getTeamsDeviceUsageTotalUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsDeviceUsageTotalUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Device Usage User Counts",
					"value": "Reports Get Teams Device Usage User Counts",
					"action": "Invoke function getTeamsDeviceUsageUserCounts",
					"description": "Invoke function getTeamsDeviceUsageUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsDeviceUsageUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Device Usage User Detail 7148",
					"value": "Reports Get Teams Device Usage User Detail 7148",
					"action": "Invoke function getTeamsDeviceUsageUserDetail",
					"description": "Invoke function getTeamsDeviceUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsDeviceUsageUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Teams Device Usage User Detail Bd 2 B",
					"value": "Reports Get Teams Device Usage User Detail Bd 2 B",
					"action": "Invoke function getTeamsDeviceUsageUserDetail",
					"description": "Invoke function getTeamsDeviceUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsDeviceUsageUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Team Activity Counts",
					"value": "Reports Get Teams Team Activity Counts",
					"action": "Invoke function getTeamsTeamActivityCounts",
					"description": "Invoke function getTeamsTeamActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsTeamActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Team Activity Detail A 84 C",
					"value": "Reports Get Teams Team Activity Detail A 84 C",
					"action": "Invoke function getTeamsTeamActivityDetail",
					"description": "Invoke function getTeamsTeamActivityDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsTeamActivityDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Teams Team Activity Detail 1369",
					"value": "Reports Get Teams Team Activity Detail 1369",
					"action": "Invoke function getTeamsTeamActivityDetail",
					"description": "Invoke function getTeamsTeamActivityDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsTeamActivityDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Team Activity Distribution Counts",
					"value": "Reports Get Teams Team Activity Distribution Counts",
					"action": "Invoke function getTeamsTeamActivityDistributionCounts",
					"description": "Invoke function getTeamsTeamActivityDistributionCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsTeamActivityDistributionCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams Team Counts",
					"value": "Reports Get Teams Team Counts",
					"action": "Invoke function getTeamsTeamCounts",
					"description": "Invoke function getTeamsTeamCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsTeamCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity Counts",
					"value": "Reports Get Teams User Activity Counts",
					"action": "Invoke function getTeamsUserActivityCounts",
					"description": "Invoke function getTeamsUserActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity Distribution Total User Counts",
					"value": "Reports Get Teams User Activity Distribution Total User Counts",
					"action": "Invoke function getTeamsUserActivityDistributionTotalUserCounts",
					"description": "Invoke function getTeamsUserActivityDistributionTotalUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityDistributionTotalUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity Distribution User Counts",
					"value": "Reports Get Teams User Activity Distribution User Counts",
					"action": "Invoke function getTeamsUserActivityDistributionUserCounts",
					"description": "Invoke function getTeamsUserActivityDistributionUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityDistributionUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity Total Counts",
					"value": "Reports Get Teams User Activity Total Counts",
					"action": "Invoke function getTeamsUserActivityTotalCounts",
					"description": "Invoke function getTeamsUserActivityTotalCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityTotalCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity Total Distribution Counts",
					"value": "Reports Get Teams User Activity Total Distribution Counts",
					"action": "Invoke function getTeamsUserActivityTotalDistributionCounts",
					"description": "Invoke function getTeamsUserActivityTotalDistributionCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityTotalDistributionCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity Total User Counts",
					"value": "Reports Get Teams User Activity Total User Counts",
					"action": "Invoke function getTeamsUserActivityTotalUserCounts",
					"description": "Invoke function getTeamsUserActivityTotalUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityTotalUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity User Counts",
					"value": "Reports Get Teams User Activity User Counts",
					"action": "Invoke function getTeamsUserActivityUserCounts",
					"description": "Invoke function getTeamsUserActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity User Detail A 3 F 1",
					"value": "Reports Get Teams User Activity User Detail A 3 F 1",
					"action": "Invoke function getTeamsUserActivityUserDetail",
					"description": "Invoke function getTeamsUserActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Teams User Activity User Detail 85 Fc",
					"value": "Reports Get Teams User Activity User Detail 85 Fc",
					"action": "Invoke function getTeamsUserActivityUserDetail",
					"description": "Invoke function getTeamsUserActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getTeamsUserActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get User Archived Print Jobs",
					"value": "Reports Get User Archived Print Jobs",
					"action": "Invoke function getUserArchivedPrintJobs",
					"description": "Invoke function getUserArchivedPrintJobs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getUserArchivedPrintJobs(userId='{{$parameter[\"userId\"]}}',startDateTime={{$parameter[\"startDateTime\"]}},endDateTime={{$parameter[\"endDateTime\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Yammer Activity Counts",
					"value": "Reports Get Yammer Activity Counts",
					"action": "Invoke function getYammerActivityCounts",
					"description": "Invoke function getYammerActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Activity User Counts",
					"value": "Reports Get Yammer Activity User Counts",
					"action": "Invoke function getYammerActivityUserCounts",
					"description": "Invoke function getYammerActivityUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerActivityUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Activity User Detail Ac 30",
					"value": "Reports Get Yammer Activity User Detail Ac 30",
					"action": "Invoke function getYammerActivityUserDetail",
					"description": "Invoke function getYammerActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerActivityUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Yammer Activity User Detail 8 A 2 A",
					"value": "Reports Get Yammer Activity User Detail 8 A 2 A",
					"action": "Invoke function getYammerActivityUserDetail",
					"description": "Invoke function getYammerActivityUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerActivityUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Device Usage Distribution User Counts",
					"value": "Reports Get Yammer Device Usage Distribution User Counts",
					"action": "Invoke function getYammerDeviceUsageDistributionUserCounts",
					"description": "Invoke function getYammerDeviceUsageDistributionUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerDeviceUsageDistributionUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Device Usage User Counts",
					"value": "Reports Get Yammer Device Usage User Counts",
					"action": "Invoke function getYammerDeviceUsageUserCounts",
					"description": "Invoke function getYammerDeviceUsageUserCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerDeviceUsageUserCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Device Usage User Detail D 0 Ac",
					"value": "Reports Get Yammer Device Usage User Detail D 0 Ac",
					"action": "Invoke function getYammerDeviceUsageUserDetail",
					"description": "Invoke function getYammerDeviceUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerDeviceUsageUserDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Yammer Device Usage User Detail 1880",
					"value": "Reports Get Yammer Device Usage User Detail 1880",
					"action": "Invoke function getYammerDeviceUsageUserDetail",
					"description": "Invoke function getYammerDeviceUsageUserDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerDeviceUsageUserDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Groups Activity Counts",
					"value": "Reports Get Yammer Groups Activity Counts",
					"action": "Invoke function getYammerGroupsActivityCounts",
					"description": "Invoke function getYammerGroupsActivityCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerGroupsActivityCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Groups Activity Detail Da 9 A",
					"value": "Reports Get Yammer Groups Activity Detail Da 9 A",
					"action": "Invoke function getYammerGroupsActivityDetail",
					"description": "Invoke function getYammerGroupsActivityDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerGroupsActivityDetail(date={{$parameter[\"date\"]}})"
						}
					}
				},
				{
					"name": "Reports Get Yammer Groups Activity Detail 8201",
					"value": "Reports Get Yammer Groups Activity Detail 8201",
					"action": "Invoke function getYammerGroupsActivityDetail",
					"description": "Invoke function getYammerGroupsActivityDetail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerGroupsActivityDetail(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Get Yammer Groups Activity Group Counts",
					"value": "Reports Get Yammer Groups Activity Group Counts",
					"action": "Invoke function getYammerGroupsActivityGroupCounts",
					"description": "Invoke function getYammerGroupsActivityGroupCounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.getYammerGroupsActivityGroupCounts(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Abandonment Details",
					"value": "Reports Managed Device Enrollment Abandonment Details",
					"action": "Invoke function managedDeviceEnrollmentAbandonmentDetails",
					"description": "Metadata for Enrollment abandonment details report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentAbandonmentDetails(skip={{$parameter[\"skip\"]}},top={{$parameter[\"top\"]}},filter='{{$parameter[\"filter\"]}}',skipToken='{{$parameter[\"skipToken\"]}}')"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Abandonment Summary",
					"value": "Reports Managed Device Enrollment Abandonment Summary",
					"action": "Invoke function managedDeviceEnrollmentAbandonmentSummary",
					"description": "Metadata for Enrollment abandonment summary report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentAbandonmentSummary(skip={{$parameter[\"skip\"]}},top={{$parameter[\"top\"]}},filter='{{$parameter[\"filter\"]}}',skipToken='{{$parameter[\"skipToken\"]}}')"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Failure Details 027 E",
					"value": "Reports Managed Device Enrollment Failure Details 027 E",
					"action": "Invoke function managedDeviceEnrollmentFailureDetails",
					"description": "Invoke function managedDeviceEnrollmentFailureDetails",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentFailureDetails()"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Failure Details 6302",
					"value": "Reports Managed Device Enrollment Failure Details 6302",
					"action": "Invoke function managedDeviceEnrollmentFailureDetails",
					"description": "Invoke function managedDeviceEnrollmentFailureDetails",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentFailureDetails(skip={{$parameter[\"skip\"]}},top={{$parameter[\"top\"]}},filter='{{$parameter[\"filter\"]}}',skipToken='{{$parameter[\"skipToken\"]}}')"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Failure Trends",
					"value": "Reports Managed Device Enrollment Failure Trends",
					"action": "Invoke function managedDeviceEnrollmentFailureTrends",
					"description": "Metadata for the enrollment failure trends report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentFailureTrends()"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Top Failures 4669",
					"value": "Reports Managed Device Enrollment Top Failures 4669",
					"action": "Invoke function managedDeviceEnrollmentTopFailures",
					"description": "Invoke function managedDeviceEnrollmentTopFailures",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentTopFailures()"
						}
					}
				},
				{
					"name": "Reports Managed Device Enrollment Top Failures 584 D",
					"value": "Reports Managed Device Enrollment Top Failures 584 D",
					"action": "Invoke function managedDeviceEnrollmentTopFailures",
					"description": "Invoke function managedDeviceEnrollmentTopFailures",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/microsoft.graph.managedDeviceEnrollmentTopFailures(period='{{$parameter[\"period\"]}}')"
						}
					}
				},
				{
					"name": "Reports Security Get Attack Simulation Repeat Offenders",
					"value": "Reports Security Get Attack Simulation Repeat Offenders",
					"action": "Invoke function getAttackSimulationRepeatOffenders",
					"description": "Invoke function getAttackSimulationRepeatOffenders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/security/microsoft.graph.getAttackSimulationRepeatOffenders()"
						}
					}
				},
				{
					"name": "Reports Security Get Attack Simulation Simulation User Coverage",
					"value": "Reports Security Get Attack Simulation Simulation User Coverage",
					"action": "Invoke function getAttackSimulationSimulationUserCoverage",
					"description": "Invoke function getAttackSimulationSimulationUserCoverage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/security/microsoft.graph.getAttackSimulationSimulationUserCoverage()"
						}
					}
				},
				{
					"name": "Reports Security Get Attack Simulation Training User Coverage",
					"value": "Reports Security Get Attack Simulation Training User Coverage",
					"action": "Invoke function getAttackSimulationTrainingUserCoverage",
					"description": "Invoke function getAttackSimulationTrainingUserCoverage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/security/microsoft.graph.getAttackSimulationTrainingUserCoverage()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/authenticationMethods/microsoft.graph.usersRegisteredByFeature()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Feature 1 B 6 A"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/authenticationMethods/microsoft.graph.usersRegisteredByFeature(includedUserTypes='{includedUserTypes}',includedUserRoles='{includedUserRoles}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Feature 833 A"
					]
				}
			}
		},
		{
			"displayName": "Included User Types",
			"name": "includedUserTypes",
			"required": true,
			"description": "Usage: includedUserTypes='{includedUserTypes}'",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Member",
					"value": "member"
				},
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Feature 833 A"
					]
				}
			}
		},
		{
			"displayName": "Included User Roles",
			"name": "includedUserRoles",
			"required": true,
			"description": "Usage: includedUserRoles='{includedUserRoles}'",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Privileged Admin",
					"value": "privilegedAdmin"
				},
				{
					"name": "Admin",
					"value": "admin"
				},
				{
					"name": "User",
					"value": "user"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Feature 833 A"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/authenticationMethods/microsoft.graph.usersRegisteredByMethod()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Method C 68 E"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/authenticationMethods/microsoft.graph.usersRegisteredByMethod(includedUserTypes='{includedUserTypes}',includedUserRoles='{includedUserRoles}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Method A 200"
					]
				}
			}
		},
		{
			"displayName": "Included User Types",
			"name": "includedUserTypes",
			"required": true,
			"description": "Usage: includedUserTypes='{includedUserTypes}'",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Member",
					"value": "member"
				},
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Method A 200"
					]
				}
			}
		},
		{
			"displayName": "Included User Roles",
			"name": "includedUserRoles",
			"required": true,
			"description": "Usage: includedUserRoles='{includedUserRoles}'",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Privileged Admin",
					"value": "privilegedAdmin"
				},
				{
					"name": "Admin",
					"value": "admin"
				},
				{
					"name": "User",
					"value": "user"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Authentication Methods Users Registered By Method A 200"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.deviceConfigurationDeviceActivity()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Device Configuration Device Activity"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.deviceConfigurationUserActivity()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Device Configuration User Activity"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getAzureADApplicationSignInSummary(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Azure AD Application Sign In Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getBrowserDistributionUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Browser Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Browser Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getBrowserUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Browser User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Browser User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getBrowserUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Browser User Detail"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Browser User Detail"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getCredentialUsageSummary(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential Usage Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getCredentialUserRegistrationCount()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Credential User Registration Count"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity User Detail Fe 32"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity User Detail Fe 32"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity User Detail Dcb 6"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email Activity User Detail Dcb 6"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailAppUsageAppsUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage Apps User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage Apps User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailAppUsageUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailAppUsageUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage User Detail 62 Ec"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage User Detail 62 Ec"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailAppUsageUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage User Detail A 0 Ff"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage User Detail A 0 Ff"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getEmailAppUsageVersionsUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage Versions User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Email App Usage Versions User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getFormsUserActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getFormsUserActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getFormsUserActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity User Detail 688 A"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity User Detail 688 A"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getFormsUserActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity User Detail 86 D 0"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Forms User Activity User Detail 86 D 0"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getGroupArchivedPrintJobs(groupId='{groupId}',startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Usage: groupId='{groupId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Group Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getM365AppPlatformUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App Platform User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App Platform User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getM365AppUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getM365AppUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App User Detail 2 B 20"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App User Detail 2 B 20"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getM365AppUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App User Detail 3 B 6 B"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get M 365 App User Detail 3 B 6 B"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getMailboxUsageDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Detail"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Detail"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getMailboxUsageMailboxCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Mailbox Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Mailbox Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getMailboxUsageQuotaStatusMailboxCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Quota Status Mailbox Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Quota Status Mailbox Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getMailboxUsageStorage(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Storage"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Mailbox Usage Storage"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ActivationCounts()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Activation Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ActivationsUserCounts()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Activations User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ActivationsUserDetail()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Activations User Detail"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ActiveUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ActiveUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail D 389"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ActiveUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Active User Detail 285 F"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365GroupsActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365GroupsActivityDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 81 Cc"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365GroupsActivityDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Detail 50 Ef"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365GroupsActivityFileCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365GroupsActivityGroupCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365GroupsActivityStorage(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Groups Activity Storage"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOffice365ServicesUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Office 365 Services User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveActivityFileCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity User Detail 05 F 1"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity User Detail 05 F 1"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity User Detail 38 E 5"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Activity User Detail 38 E 5"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveUsageAccountCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Account Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Account Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveUsageAccountDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Account Detail E 827"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Account Detail E 827"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveUsageAccountDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Account Detail 9341"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Account Detail 9341"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveUsageFileCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage File Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage File Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getOneDriveUsageStorage(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Storage"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get One Drive Usage Storage"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getPrinterArchivedPrintJobs(printerId='{printerId}',startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Printer ID",
			"name": "printerId",
			"required": true,
			"description": "Usage: printerId='{printerId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Printer Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getRelyingPartyDetailedSummary(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Relying Party Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointActivityFileCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity File Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointActivityPages(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity Pages"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity User Detail F 3 Be"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity User Detail F 3 Be"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity User Detail E 8 D 6"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Activity User Detail E 8 D 6"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointSiteUsageDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Detail D 27 A"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Detail D 27 A"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointSiteUsageDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Detail Bfde"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Detail Bfde"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointSiteUsageFileCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage File Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage File Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointSiteUsagePages(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Pages"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointSiteUsageSiteCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Site Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Site Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSharePointSiteUsageStorage(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Storage"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Share Point Site Usage Storage"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity User Detail E 4 C 9"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity User Detail E 4 C 9"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity User Detail 2550"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Activity User Detail 2550"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessDeviceUsageDistributionUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage User Detail A 692"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage User Detail A 692"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage User Detail 0 C 42"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Device Usage User Detail 0 C 42"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Organizer Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Organizer Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityMinuteCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Organizer Activity Minute Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Organizer Activity Minute Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Organizer Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Organizer Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessParticipantActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Participant Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Participant Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessParticipantActivityMinuteCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Participant Activity Minute Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Participant Activity Minute Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessParticipantActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Participant Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Participant Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Peer To Peer Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Peer To Peer Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityMinuteCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Peer To Peer Activity Minute Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Peer To Peer Activity Minute Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Peer To Peer Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Skype For Business Peer To Peer Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsDeviceUsageDistributionTotalUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage Distribution Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage Distribution Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsDeviceUsageDistributionUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsDeviceUsageTotalUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsDeviceUsageUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsDeviceUsageUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage User Detail 7148"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage User Detail 7148"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsDeviceUsageUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage User Detail Bd 2 B"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Device Usage User Detail Bd 2 B"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsTeamActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsTeamActivityDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Detail A 84 C"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Detail A 84 C"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsTeamActivityDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Detail 1369"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Detail 1369"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsTeamActivityDistributionCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Distribution Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Activity Distribution Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsTeamCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams Team Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityDistributionTotalUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Distribution Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Distribution Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityDistributionUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityTotalCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Total Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Total Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityTotalDistributionCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Total Distribution Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Total Distribution Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityTotalUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity Total User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity User Detail A 3 F 1"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity User Detail A 3 F 1"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getTeamsUserActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity User Detail 85 Fc"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Teams User Activity User Detail 85 Fc"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getUserArchivedPrintJobs(userId='{userId}',startDateTime={startDateTime},endDateTime={endDateTime})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "Usage: userId='{userId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime={startDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime={endDateTime}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get User Archived Print Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerActivityUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerActivityUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity User Detail Ac 30"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity User Detail Ac 30"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerActivityUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity User Detail 8 A 2 A"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Activity User Detail 8 A 2 A"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerDeviceUsageDistributionUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage Distribution User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerDeviceUsageUserCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage User Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerDeviceUsageUserDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage User Detail D 0 Ac"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage User Detail D 0 Ac"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerDeviceUsageUserDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage User Detail 1880"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Device Usage User Detail 1880"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerGroupsActivityCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerGroupsActivityDetail(date={date})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Detail Da 9 A"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"required": true,
			"description": "Usage: date={date}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Detail Da 9 A"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerGroupsActivityDetail(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Detail 8201"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Detail 8201"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.getYammerGroupsActivityGroupCounts(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Get Yammer Groups Activity Group Counts"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentAbandonmentDetails(skip={skip},top={top},filter='{filter}',skipToken='{skipToken}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Details"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"required": true,
			"description": "Usage: skip={skip}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Details"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"required": true,
			"description": "Usage: top={top}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Details"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"required": true,
			"description": "Usage: filter='{filter}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Details"
					]
				}
			}
		},
		{
			"displayName": "Skip Token",
			"name": "skipToken",
			"required": true,
			"description": "Usage: skipToken='{skipToken}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentAbandonmentSummary(skip={skip},top={top},filter='{filter}',skipToken='{skipToken}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Summary"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"required": true,
			"description": "Usage: skip={skip}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Summary"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"required": true,
			"description": "Usage: top={top}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Summary"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"required": true,
			"description": "Usage: filter='{filter}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Summary"
					]
				}
			}
		},
		{
			"displayName": "Skip Token",
			"name": "skipToken",
			"required": true,
			"description": "Usage: skipToken='{skipToken}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Abandonment Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentFailureDetails()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Details 027 E"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentFailureDetails(skip={skip},top={top},filter='{filter}',skipToken='{skipToken}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Details 6302"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"required": true,
			"description": "Usage: skip={skip}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Details 6302"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"required": true,
			"description": "Usage: top={top}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Details 6302"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"required": true,
			"description": "Usage: filter='{filter}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Details 6302"
					]
				}
			}
		},
		{
			"displayName": "Skip Token",
			"name": "skipToken",
			"required": true,
			"description": "Usage: skipToken='{skipToken}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Details 6302"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentFailureTrends()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Failure Trends"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentTopFailures()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Top Failures 4669"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/microsoft.graph.managedDeviceEnrollmentTopFailures(period='{period}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Top Failures 584 D"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"required": true,
			"description": "Usage: period='{period}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Managed Device Enrollment Top Failures 584 D"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/security/microsoft.graph.getAttackSimulationRepeatOffenders()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Repeat Offenders"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Repeat Offenders"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Repeat Offenders"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Repeat Offenders"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Repeat Offenders"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Repeat Offenders"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/security/microsoft.graph.getAttackSimulationSimulationUserCoverage()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Simulation User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Simulation User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Simulation User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Simulation User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Simulation User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Simulation User Coverage"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/security/microsoft.graph.getAttackSimulationTrainingUserCoverage()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Training User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Training User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Training User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Training User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Training User Coverage"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Functions"
					],
					"operation": [
						"Reports Security Get Attack Simulation Training User Coverage"
					]
				}
			}
		},
];
