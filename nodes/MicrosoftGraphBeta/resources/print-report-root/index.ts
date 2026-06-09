import type { INodeProperties } from 'n8n-workflow';

export const printReportRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					]
				}
			},
			"options": [
				{
					"name": "Print Delete Reports",
					"value": "Print Delete Reports",
					"action": "Delete navigation property reports for print",
					"description": "Delete navigation property reports for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports"
						}
					}
				},
				{
					"name": "Print Get Reports",
					"value": "Print Get Reports",
					"action": "Get reports from print",
					"description": "Get reports from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports"
						}
					}
				},
				{
					"name": "Print Update Reports",
					"value": "Print Update Reports",
					"action": "Update the navigation property reports in print",
					"description": "Update the navigation property reports in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports"
						}
					}
				},
				{
					"name": "Print Reports List Application Sign In Detailed Summary",
					"value": "Print Reports List Application Sign In Detailed Summary",
					"action": "List applicationSignInDetailedSummary",
					"description": "Retrieve the applicationSignInDetailedSummary objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/applicationSignInDetailedSummary"
						}
					}
				},
				{
					"name": "Print Reports Create Application Sign In Detailed Summary",
					"value": "Print Reports Create Application Sign In Detailed Summary",
					"action": "Create new navigation property to applicationSignInDetailedSummary for print",
					"description": "Create new navigation property to applicationSignInDetailedSummary for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/applicationSignInDetailedSummary"
						}
					}
				},
				{
					"name": "Print Reports Delete Application Sign In Detailed Summary",
					"value": "Print Reports Delete Application Sign In Detailed Summary",
					"action": "Delete navigation property applicationSignInDetailedSummary for print",
					"description": "Delete navigation property applicationSignInDetailedSummary for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/applicationSignInDetailedSummary/{{$parameter[\"applicationSignInDetailedSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Application Sign In Detailed Summary",
					"value": "Print Reports Get Application Sign In Detailed Summary",
					"action": "Get applicationSignInDetailedSummary from print",
					"description": "Represents a detailed summary of an application sign-in.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/applicationSignInDetailedSummary/{{$parameter[\"applicationSignInDetailedSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Application Sign In Detailed Summary",
					"value": "Print Reports Update Application Sign In Detailed Summary",
					"action": "Update the navigation property applicationSignInDetailedSummary in print",
					"description": "Update the navigation property applicationSignInDetailedSummary in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/applicationSignInDetailedSummary/{{$parameter[\"applicationSignInDetailedSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Delete Authentication Methods",
					"value": "Print Reports Delete Authentication Methods",
					"action": "Delete navigation property authenticationMethods for print",
					"description": "Delete navigation property authenticationMethods for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/authenticationMethods"
						}
					}
				},
				{
					"name": "Print Reports Get Authentication Methods",
					"value": "Print Reports Get Authentication Methods",
					"action": "Get authenticationMethods from print",
					"description": "Container for navigation properties for Azure AD authentication methods resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/authenticationMethods"
						}
					}
				},
				{
					"name": "Print Reports Update Authentication Methods",
					"value": "Print Reports Update Authentication Methods",
					"action": "Update the navigation property authenticationMethods in print",
					"description": "Update the navigation property authenticationMethods in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/authenticationMethods"
						}
					}
				},
				{
					"name": "Print Reports Authentication Methods List User Registration Details",
					"value": "Print Reports Authentication Methods List User Registration Details",
					"action": "List userRegistrationDetails",
					"description": "Get a list of the authentication methods registered for the user as defined in the userRegistrationDetails object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/authenticationMethods/userRegistrationDetails"
						}
					}
				},
				{
					"name": "Print Reports Authentication Methods Create User Registration Details",
					"value": "Print Reports Authentication Methods Create User Registration Details",
					"action": "Create new navigation property to userRegistrationDetails for print",
					"description": "Create new navigation property to userRegistrationDetails for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/authenticationMethods/userRegistrationDetails"
						}
					}
				},
				{
					"name": "Print Reports Authentication Methods Delete User Registration Details",
					"value": "Print Reports Authentication Methods Delete User Registration Details",
					"action": "Delete navigation property userRegistrationDetails for print",
					"description": "Delete navigation property userRegistrationDetails for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/authenticationMethods/userRegistrationDetails/{{$parameter[\"userRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Authentication Methods Get User Registration Details",
					"value": "Print Reports Authentication Methods Get User Registration Details",
					"action": "Get userRegistrationDetails from print",
					"description": "Represents the state of a user's authentication methods, including which methods are registered and which features the user is registered and capable of (such as multi-factor authentication, self-service password reset, and passwordless authentication).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/authenticationMethods/userRegistrationDetails/{{$parameter[\"userRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Authentication Methods Update User Registration Details",
					"value": "Print Reports Authentication Methods Update User Registration Details",
					"action": "Update the navigation property userRegistrationDetails in print",
					"description": "Update the navigation property userRegistrationDetails in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/authenticationMethods/userRegistrationDetails/{{$parameter[\"userRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Credential User Registration Details",
					"value": "Print Reports List Credential User Registration Details",
					"action": "List credentialUserRegistrationDetails",
					"description": "Get a list of credentialUserRegistrationDetails objects for a given tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/credentialUserRegistrationDetails"
						}
					}
				},
				{
					"name": "Print Reports Create Credential User Registration Details",
					"value": "Print Reports Create Credential User Registration Details",
					"action": "Create new navigation property to credentialUserRegistrationDetails for print",
					"description": "Create new navigation property to credentialUserRegistrationDetails for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/credentialUserRegistrationDetails"
						}
					}
				},
				{
					"name": "Print Reports Delete Credential User Registration Details",
					"value": "Print Reports Delete Credential User Registration Details",
					"action": "Delete navigation property credentialUserRegistrationDetails for print",
					"description": "Delete navigation property credentialUserRegistrationDetails for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/credentialUserRegistrationDetails/{{$parameter[\"credentialUserRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Credential User Registration Details",
					"value": "Print Reports Get Credential User Registration Details",
					"action": "Get credentialUserRegistrationDetails from print",
					"description": "Details of the usage of self-service password reset and multi-factor authentication (MFA) for all registered users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/credentialUserRegistrationDetails/{{$parameter[\"credentialUserRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Credential User Registration Details",
					"value": "Print Reports Update Credential User Registration Details",
					"action": "Update the navigation property credentialUserRegistrationDetails in print",
					"description": "Update the navigation property credentialUserRegistrationDetails in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/credentialUserRegistrationDetails/{{$parameter[\"credentialUserRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Daily Print Usage",
					"value": "Print Reports List Daily Print Usage",
					"action": "Get dailyPrintUsage from print",
					"description": "Get dailyPrintUsage from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsage"
						}
					}
				},
				{
					"name": "Print Reports Create Daily Print Usage",
					"value": "Print Reports Create Daily Print Usage",
					"action": "Create new navigation property to dailyPrintUsage for print",
					"description": "Create new navigation property to dailyPrintUsage for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/dailyPrintUsage"
						}
					}
				},
				{
					"name": "Print Reports Delete Daily Print Usage",
					"value": "Print Reports Delete Daily Print Usage",
					"action": "Delete navigation property dailyPrintUsage for print",
					"description": "Delete navigation property dailyPrintUsage for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/dailyPrintUsage/{{$parameter[\"printUsage-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Daily Print Usage",
					"value": "Print Reports Get Daily Print Usage",
					"action": "Get dailyPrintUsage from print",
					"description": "Get dailyPrintUsage from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsage/{{$parameter[\"printUsage-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Daily Print Usage",
					"value": "Print Reports Update Daily Print Usage",
					"action": "Update the navigation property dailyPrintUsage in print",
					"description": "Update the navigation property dailyPrintUsage in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/dailyPrintUsage/{{$parameter[\"printUsage-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Daily Print Usage By Printer",
					"value": "Print Reports List Daily Print Usage By Printer",
					"action": "List dailyPrintUsageByPrinter",
					"description": "Retrieve a list of daily print usage summaries, grouped by printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Create Daily Print Usage By Printer",
					"value": "Print Reports Create Daily Print Usage By Printer",
					"action": "Create new navigation property to dailyPrintUsageByPrinter for print",
					"description": "Create new navigation property to dailyPrintUsageByPrinter for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/dailyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Delete Daily Print Usage By Printer",
					"value": "Print Reports Delete Daily Print Usage By Printer",
					"action": "Delete navigation property dailyPrintUsageByPrinter for print",
					"description": "Delete navigation property dailyPrintUsageByPrinter for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/dailyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Daily Print Usage By Printer",
					"value": "Print Reports Get Daily Print Usage By Printer",
					"action": "Get dailyPrintUsageByPrinter from print",
					"description": "Get dailyPrintUsageByPrinter from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Daily Print Usage By Printer",
					"value": "Print Reports Update Daily Print Usage By Printer",
					"action": "Update the navigation property dailyPrintUsageByPrinter in print",
					"description": "Update the navigation property dailyPrintUsageByPrinter in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/dailyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Daily Print Usage By User",
					"value": "Print Reports List Daily Print Usage By User",
					"action": "List dailyPrintUsageByUser",
					"description": "Retrieve a list of daily print usage summaries, grouped by user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Print Reports Create Daily Print Usage By User",
					"value": "Print Reports Create Daily Print Usage By User",
					"action": "Create new navigation property to dailyPrintUsageByUser for print",
					"description": "Create new navigation property to dailyPrintUsageByUser for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/dailyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Print Reports Delete Daily Print Usage By User",
					"value": "Print Reports Delete Daily Print Usage By User",
					"action": "Delete navigation property dailyPrintUsageByUser for print",
					"description": "Delete navigation property dailyPrintUsageByUser for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/dailyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Daily Print Usage By User",
					"value": "Print Reports Get Daily Print Usage By User",
					"action": "Get dailyPrintUsageByUser from print",
					"description": "Get dailyPrintUsageByUser from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Daily Print Usage By User",
					"value": "Print Reports Update Daily Print Usage By User",
					"action": "Update the navigation property dailyPrintUsageByUser in print",
					"description": "Update the navigation property dailyPrintUsageByUser in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/dailyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Daily Print Usage Summaries By Printer",
					"value": "Print Reports List Daily Print Usage Summaries By Printer",
					"action": "Get dailyPrintUsageSummariesByPrinter from print",
					"description": "Get dailyPrintUsageSummariesByPrinter from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Create Daily Print Usage Summaries By Printer",
					"value": "Print Reports Create Daily Print Usage Summaries By Printer",
					"action": "Create new navigation property to dailyPrintUsageSummariesByPrinter for print",
					"description": "Create new navigation property to dailyPrintUsageSummariesByPrinter for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/dailyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Delete Daily Print Usage Summaries By Printer",
					"value": "Print Reports Delete Daily Print Usage Summaries By Printer",
					"action": "Delete navigation property dailyPrintUsageSummariesByPrinter for print",
					"description": "Delete navigation property dailyPrintUsageSummariesByPrinter for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/dailyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Daily Print Usage Summaries By Printer",
					"value": "Print Reports Get Daily Print Usage Summaries By Printer",
					"action": "Get dailyPrintUsageSummariesByPrinter from print",
					"description": "Get dailyPrintUsageSummariesByPrinter from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Daily Print Usage Summaries By Printer",
					"value": "Print Reports Update Daily Print Usage Summaries By Printer",
					"action": "Update the navigation property dailyPrintUsageSummariesByPrinter in print",
					"description": "Update the navigation property dailyPrintUsageSummariesByPrinter in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/dailyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Daily Print Usage Summaries By User",
					"value": "Print Reports List Daily Print Usage Summaries By User",
					"action": "Get dailyPrintUsageSummariesByUser from print",
					"description": "Get dailyPrintUsageSummariesByUser from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Print Reports Create Daily Print Usage Summaries By User",
					"value": "Print Reports Create Daily Print Usage Summaries By User",
					"action": "Create new navigation property to dailyPrintUsageSummariesByUser for print",
					"description": "Create new navigation property to dailyPrintUsageSummariesByUser for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/dailyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Print Reports Delete Daily Print Usage Summaries By User",
					"value": "Print Reports Delete Daily Print Usage Summaries By User",
					"action": "Delete navigation property dailyPrintUsageSummariesByUser for print",
					"description": "Delete navigation property dailyPrintUsageSummariesByUser for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/dailyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Daily Print Usage Summaries By User",
					"value": "Print Reports Get Daily Print Usage Summaries By User",
					"action": "Get dailyPrintUsageSummariesByUser from print",
					"description": "Get dailyPrintUsageSummariesByUser from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/dailyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Daily Print Usage Summaries By User",
					"value": "Print Reports Update Daily Print Usage Summaries By User",
					"action": "Update the navigation property dailyPrintUsageSummariesByUser in print",
					"description": "Update the navigation property dailyPrintUsageSummariesByUser in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/dailyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Monthly Print Usage By Printer",
					"value": "Print Reports List Monthly Print Usage By Printer",
					"action": "List monthlyPrintUsageByPrinter",
					"description": "Retrieve a list of monthly print usage summaries, grouped by printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Create Monthly Print Usage By Printer",
					"value": "Print Reports Create Monthly Print Usage By Printer",
					"action": "Create new navigation property to monthlyPrintUsageByPrinter for print",
					"description": "Create new navigation property to monthlyPrintUsageByPrinter for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/monthlyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Delete Monthly Print Usage By Printer",
					"value": "Print Reports Delete Monthly Print Usage By Printer",
					"action": "Delete navigation property monthlyPrintUsageByPrinter for print",
					"description": "Delete navigation property monthlyPrintUsageByPrinter for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/monthlyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Monthly Print Usage By Printer",
					"value": "Print Reports Get Monthly Print Usage By Printer",
					"action": "Get monthlyPrintUsageByPrinter from print",
					"description": "Get monthlyPrintUsageByPrinter from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Monthly Print Usage By Printer",
					"value": "Print Reports Update Monthly Print Usage By Printer",
					"action": "Update the navigation property monthlyPrintUsageByPrinter in print",
					"description": "Update the navigation property monthlyPrintUsageByPrinter in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/monthlyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Monthly Print Usage By User",
					"value": "Print Reports List Monthly Print Usage By User",
					"action": "List monthlyPrintUsageByUser",
					"description": "Retrieve a list of monthly print usage summaries, grouped by user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Print Reports Create Monthly Print Usage By User",
					"value": "Print Reports Create Monthly Print Usage By User",
					"action": "Create new navigation property to monthlyPrintUsageByUser for print",
					"description": "Create new navigation property to monthlyPrintUsageByUser for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/monthlyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Print Reports Delete Monthly Print Usage By User",
					"value": "Print Reports Delete Monthly Print Usage By User",
					"action": "Delete navigation property monthlyPrintUsageByUser for print",
					"description": "Delete navigation property monthlyPrintUsageByUser for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/monthlyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Monthly Print Usage By User",
					"value": "Print Reports Get Monthly Print Usage By User",
					"action": "Get monthlyPrintUsageByUser from print",
					"description": "Get monthlyPrintUsageByUser from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Monthly Print Usage By User",
					"value": "Print Reports Update Monthly Print Usage By User",
					"action": "Update the navigation property monthlyPrintUsageByUser in print",
					"description": "Update the navigation property monthlyPrintUsageByUser in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/monthlyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Monthly Print Usage Summaries By Printer",
					"value": "Print Reports List Monthly Print Usage Summaries By Printer",
					"action": "Get monthlyPrintUsageSummariesByPrinter from print",
					"description": "Get monthlyPrintUsageSummariesByPrinter from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Create Monthly Print Usage Summaries By Printer",
					"value": "Print Reports Create Monthly Print Usage Summaries By Printer",
					"action": "Create new navigation property to monthlyPrintUsageSummariesByPrinter for print",
					"description": "Create new navigation property to monthlyPrintUsageSummariesByPrinter for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/monthlyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Print Reports Delete Monthly Print Usage Summaries By Printer",
					"value": "Print Reports Delete Monthly Print Usage Summaries By Printer",
					"action": "Delete navigation property monthlyPrintUsageSummariesByPrinter for print",
					"description": "Delete navigation property monthlyPrintUsageSummariesByPrinter for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/monthlyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Monthly Print Usage Summaries By Printer",
					"value": "Print Reports Get Monthly Print Usage Summaries By Printer",
					"action": "Get monthlyPrintUsageSummariesByPrinter from print",
					"description": "Get monthlyPrintUsageSummariesByPrinter from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Monthly Print Usage Summaries By Printer",
					"value": "Print Reports Update Monthly Print Usage Summaries By Printer",
					"action": "Update the navigation property monthlyPrintUsageSummariesByPrinter in print",
					"description": "Update the navigation property monthlyPrintUsageSummariesByPrinter in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/monthlyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports List Monthly Print Usage Summaries By User",
					"value": "Print Reports List Monthly Print Usage Summaries By User",
					"action": "Get monthlyPrintUsageSummariesByUser from print",
					"description": "Get monthlyPrintUsageSummariesByUser from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Print Reports Create Monthly Print Usage Summaries By User",
					"value": "Print Reports Create Monthly Print Usage Summaries By User",
					"action": "Create new navigation property to monthlyPrintUsageSummariesByUser for print",
					"description": "Create new navigation property to monthlyPrintUsageSummariesByUser for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/monthlyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Print Reports Delete Monthly Print Usage Summaries By User",
					"value": "Print Reports Delete Monthly Print Usage Summaries By User",
					"action": "Delete navigation property monthlyPrintUsageSummariesByUser for print",
					"description": "Delete navigation property monthlyPrintUsageSummariesByUser for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/monthlyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get Monthly Print Usage Summaries By User",
					"value": "Print Reports Get Monthly Print Usage Summaries By User",
					"action": "Get monthlyPrintUsageSummariesByUser from print",
					"description": "Get monthlyPrintUsageSummariesByUser from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/monthlyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update Monthly Print Usage Summaries By User",
					"value": "Print Reports Update Monthly Print Usage Summaries By User",
					"action": "Update the navigation property monthlyPrintUsageSummariesByUser in print",
					"description": "Update the navigation property monthlyPrintUsageSummariesByUser in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/monthlyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Delete Security",
					"value": "Print Reports Delete Security",
					"action": "Delete navigation property security for print",
					"description": "Delete navigation property security for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/security"
						}
					}
				},
				{
					"name": "Print Reports Get Security",
					"value": "Print Reports Get Security",
					"action": "Get security from print",
					"description": "Provides the ability to launch a realistic simulated phishing attack that organizations can learn from.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/security"
						}
					}
				},
				{
					"name": "Print Reports Update Security",
					"value": "Print Reports Update Security",
					"action": "Update the navigation property security in print",
					"description": "Update the navigation property security in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/security"
						}
					}
				},
				{
					"name": "Print Reports List User Credential Usage Details",
					"value": "Print Reports List User Credential Usage Details",
					"action": "List userCredentialUsageDetails",
					"description": "Get a list of userCredentialUsageDetails objects for a given tenant. Details include user information, status of the reset, and the reason for failure.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/userCredentialUsageDetails"
						}
					}
				},
				{
					"name": "Print Reports Create User Credential Usage Details",
					"value": "Print Reports Create User Credential Usage Details",
					"action": "Create new navigation property to userCredentialUsageDetails for print",
					"description": "Create new navigation property to userCredentialUsageDetails for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/reports/userCredentialUsageDetails"
						}
					}
				},
				{
					"name": "Print Reports Delete User Credential Usage Details",
					"value": "Print Reports Delete User Credential Usage Details",
					"action": "Delete navigation property userCredentialUsageDetails for print",
					"description": "Delete navigation property userCredentialUsageDetails for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/reports/userCredentialUsageDetails/{{$parameter[\"userCredentialUsageDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Get User Credential Usage Details",
					"value": "Print Reports Get User Credential Usage Details",
					"action": "Get userCredentialUsageDetails from print",
					"description": "Represents the self-service password reset (SSPR) usage for a given tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/reports/userCredentialUsageDetails/{{$parameter[\"userCredentialUsageDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Print Reports Update User Credential Usage Details",
					"value": "Print Reports Update User Credential Usage Details",
					"action": "Update the navigation property userCredentialUsageDetails in print",
					"description": "Update the navigation property userCredentialUsageDetails in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/reports/userCredentialUsageDetails/{{$parameter[\"userCredentialUsageDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /print/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Delete Reports"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Delete Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Get Reports"
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
						"Print Report Root"
					],
					"operation": [
						"Print Get Reports"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Get Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Update Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Update Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/applicationSignInDetailedSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/applicationSignInDetailedSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/applicationSignInDetailedSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Application Sign In Detailed Summary"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Application Sign In Detailed Summary"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/authenticationMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/authenticationMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Authentication Methods"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/authenticationMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/authenticationMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/authenticationMethods/userRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods List User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/authenticationMethods/userRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Create User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/authenticationMethods/userRegistrationDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Create User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Delete User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Delete User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Get User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Get User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Get User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Update User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Authentication Methods Update User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/credentialUserRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/credentialUserRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/credentialUserRegistrationDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Credential User Registration Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/dailyPrintUsage/{printUsage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsage/{printUsage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsage/{printUsage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsage/{printUsage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/dailyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageSummariesByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/dailyPrintUsageSummariesByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/monthlyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageSummariesByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage Summaries By Printer"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/monthlyPrintUsageSummariesByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage Summaries By User"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Security"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete Security"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Security"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Security"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/security<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update Security"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/userCredentialUsageDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports List User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/userCredentialUsageDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "POST /print/reports/userCredentialUsageDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Create User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Delete User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "GET /print/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get User Credential Usage Details"
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
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Get User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Report Root"
					],
					"operation": [
						"Print Reports Update User Credential Usage Details"
					]
				}
			}
		},
];
