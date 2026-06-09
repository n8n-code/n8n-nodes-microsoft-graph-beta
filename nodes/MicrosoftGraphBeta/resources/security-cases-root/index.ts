import type { INodeProperties } from 'n8n-workflow';

export const securityCasesRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Cases",
					"value": "Security Delete Cases",
					"action": "Delete navigation property cases for security",
					"description": "Delete navigation property cases for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases"
						}
					}
				},
				{
					"name": "Security Get Cases",
					"value": "Security Get Cases",
					"action": "Get cases from security",
					"description": "Get cases from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases"
						}
					}
				},
				{
					"name": "Security Update Cases",
					"value": "Security Update Cases",
					"action": "Update the navigation property cases in security",
					"description": "Update the navigation property cases in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases"
						}
					}
				},
				{
					"name": "Security Cases List Ediscovery Cases",
					"value": "Security Cases List Ediscovery Cases",
					"action": "List ediscoveryCases",
					"description": "Get a list of the ediscoveryCase objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases"
						}
					}
				},
				{
					"name": "Security Cases Create Ediscovery Cases",
					"value": "Security Cases Create Ediscovery Cases",
					"action": "Create ediscoveryCase",
					"description": "Create a new ediscoveryCase object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases"
						}
					}
				},
				{
					"name": "Security Cases Delete Ediscovery Cases",
					"value": "Security Cases Delete Ediscovery Cases",
					"action": "Delete navigation property ediscoveryCases for security",
					"description": "Delete navigation property ediscoveryCases for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Get Ediscovery Cases",
					"value": "Security Cases Get Ediscovery Cases",
					"action": "Get ediscoveryCases from security",
					"description": "Get ediscoveryCases from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Update Ediscovery Cases",
					"value": "Security Cases Update Ediscovery Cases",
					"action": "Update the navigation property ediscoveryCases in security",
					"description": "Update the navigation property ediscoveryCases in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Custodians",
					"value": "Security Cases Ediscovery Cases List Custodians",
					"action": "List ediscoveryCustodian",
					"description": "Get a list of the custodian objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Custodians",
					"value": "Security Cases Ediscovery Cases Create Custodians",
					"action": "Create custodians",
					"description": "Create a new ediscoveryCustodian object.\nAfter the custodian object is created, you will need to create the custodian's userSource to reference their mailbox and OneDrive for Business site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Custodians",
					"value": "Security Cases Ediscovery Cases Delete Custodians",
					"action": "Delete navigation property custodians for security",
					"description": "Delete navigation property custodians for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Custodians",
					"value": "Security Cases Ediscovery Cases Get Custodians",
					"action": "Get custodians from security",
					"description": "Returns a list of case ediscoveryCustodian objects for this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Custodians",
					"value": "Security Cases Ediscovery Cases Update Custodians",
					"action": "Update the navigation property custodians in security",
					"description": "Update the navigation property custodians in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Get Last Index Operation",
					"value": "Security Cases Ediscovery Cases Custodians Get Last Index Operation",
					"action": "List lastIndexOperation",
					"description": "Get a list of the ediscoveryIndexOperation associated with an ediscoveryCustodian.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/lastIndexOperation"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians List Site Sources",
					"value": "Security Cases Ediscovery Cases Custodians List Site Sources",
					"action": "List siteSources",
					"description": "Get a list of the siteSource objects associated with an ediscoveryCustodian.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/siteSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Create Site Sources",
					"value": "Security Cases Ediscovery Cases Custodians Create Site Sources",
					"action": "Create siteSource",
					"description": "Create a new siteSource object associated with an eDiscovery custodian.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/siteSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Delete Site Sources",
					"value": "Security Cases Ediscovery Cases Custodians Delete Site Sources",
					"action": "Delete navigation property siteSources for security",
					"description": "Delete navigation property siteSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Get Site Sources",
					"value": "Security Cases Ediscovery Cases Custodians Get Site Sources",
					"action": "Get siteSources from security",
					"description": "Data source entity for SharePoint sites associated with the custodian.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Update Site Sources",
					"value": "Security Cases Ediscovery Cases Custodians Update Site Sources",
					"action": "Update the navigation property siteSources in security",
					"description": "Update the navigation property siteSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Site Sources Get Site",
					"value": "Security Cases Ediscovery Cases Custodians Site Sources Get Site",
					"action": "Get site from security",
					"description": "The SharePoint site associated with the siteSource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}/site"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians List Unified Group Sources",
					"value": "Security Cases Ediscovery Cases Custodians List Unified Group Sources",
					"action": "List unifiedGroupSources",
					"description": "Get a list of the unifiedGroupSource objects associated with an ediscoveryCustodian.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/unifiedGroupSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Create Unified Group Sources",
					"value": "Security Cases Ediscovery Cases Custodians Create Unified Group Sources",
					"action": "Create custodian unifiedGroupSource",
					"description": "Create a new unifiedGroupSource object associated with an eDiscovery custodian.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/unifiedGroupSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Delete Unified Group Sources",
					"value": "Security Cases Ediscovery Cases Custodians Delete Unified Group Sources",
					"action": "Delete navigation property unifiedGroupSources for security",
					"description": "Delete navigation property unifiedGroupSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/unifiedGroupSources/{{$parameter[\"unifiedGroupSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Get Unified Group Sources",
					"value": "Security Cases Ediscovery Cases Custodians Get Unified Group Sources",
					"action": "Get unifiedGroupSources from security",
					"description": "Data source entity for groups associated with the custodian.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/unifiedGroupSources/{{$parameter[\"unifiedGroupSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Update Unified Group Sources",
					"value": "Security Cases Ediscovery Cases Custodians Update Unified Group Sources",
					"action": "Update the navigation property unifiedGroupSources in security",
					"description": "Update the navigation property unifiedGroupSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/unifiedGroupSources/{{$parameter[\"unifiedGroupSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Unified Group Sources Get Group",
					"value": "Security Cases Ediscovery Cases Custodians Unified Group Sources Get Group",
					"action": "Get group from security",
					"description": "Represents a group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/unifiedGroupSources/{{$parameter[\"unifiedGroupSource-id\"]}}/group"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians List User Sources",
					"value": "Security Cases Ediscovery Cases Custodians List User Sources",
					"action": "List userSources",
					"description": "Get a list of the userSource objects associated with an ediscoveryCustodian.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/userSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Create User Sources",
					"value": "Security Cases Ediscovery Cases Custodians Create User Sources",
					"action": "Create custodian userSource",
					"description": "Create a new userSource object associated with an eDiscovery custodian.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/userSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Delete User Sources",
					"value": "Security Cases Ediscovery Cases Custodians Delete User Sources",
					"action": "Delete navigation property userSources for security",
					"description": "Delete navigation property userSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/userSources/{{$parameter[\"userSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Get User Sources",
					"value": "Security Cases Ediscovery Cases Custodians Get User Sources",
					"action": "Get userSources from security",
					"description": "Data source entity for a custodian. This is the container for a custodian's mailbox and OneDrive for Business site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/userSources/{{$parameter[\"userSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Custodians Update User Sources",
					"value": "Security Cases Ediscovery Cases Custodians Update User Sources",
					"action": "Update the navigation property userSources in security",
					"description": "Update the navigation property userSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/userSources/{{$parameter[\"userSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Legal Holds",
					"value": "Security Cases Ediscovery Cases List Legal Holds",
					"action": "List ediscoveryHoldPolicies",
					"description": "Get a list of the ediscoveryHoldPolicy objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Legal Holds",
					"value": "Security Cases Ediscovery Cases Create Legal Holds",
					"action": "Create ediscoveryHoldPolicy",
					"description": "Create a new ediscoveryHoldPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Legal Holds",
					"value": "Security Cases Ediscovery Cases Delete Legal Holds",
					"action": "Delete navigation property legalHolds for security",
					"description": "Delete navigation property legalHolds for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Legal Holds",
					"value": "Security Cases Ediscovery Cases Get Legal Holds",
					"action": "Get legalHolds from security",
					"description": "Returns a list of case eDiscoveryHoldPolicy objects for this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Legal Holds",
					"value": "Security Cases Ediscovery Cases Update Legal Holds",
					"action": "Update the navigation property legalHolds in security",
					"description": "Update the navigation property legalHolds in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds List Site Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds List Site Sources",
					"action": "Get siteSources from security",
					"description": "Data sources that represent SharePoint sites.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/siteSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Create Site Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Create Site Sources",
					"action": "Create siteSource",
					"description": "Create a new siteSource object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/siteSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Delete Site Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Delete Site Sources",
					"action": "Delete navigation property siteSources for security",
					"description": "Delete navigation property siteSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Get Site Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Get Site Sources",
					"action": "Get siteSources from security",
					"description": "Data sources that represent SharePoint sites.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Update Site Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Update Site Sources",
					"action": "Update the navigation property siteSources in security",
					"description": "Update the navigation property siteSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Site Sources Get Site",
					"value": "Security Cases Ediscovery Cases Legal Holds Site Sources Get Site",
					"action": "Get site from security",
					"description": "The SharePoint site associated with the siteSource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/siteSources/{{$parameter[\"siteSource-id\"]}}/site"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds List User Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds List User Sources",
					"action": "Get userSources from security",
					"description": "Data sources that represent Exchange mailboxes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/userSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Create User Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Create User Sources",
					"action": "Create userSource",
					"description": "Create a new userSource object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/userSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Delete User Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Delete User Sources",
					"action": "Delete navigation property userSources for security",
					"description": "Delete navigation property userSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/userSources/{{$parameter[\"userSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Get User Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Get User Sources",
					"action": "Get userSources from security",
					"description": "Data sources that represent Exchange mailboxes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/userSources/{{$parameter[\"userSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Legal Holds Update User Sources",
					"value": "Security Cases Ediscovery Cases Legal Holds Update User Sources",
					"action": "Update the navigation property userSources in security",
					"description": "Update the navigation property userSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/legalHolds/{{$parameter[\"ediscoveryHoldPolicy-id\"]}}/userSources/{{$parameter[\"userSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Noncustodial Data Sources",
					"value": "Security Cases Ediscovery Cases List Noncustodial Data Sources",
					"action": "Get noncustodialDataSources from security",
					"description": "Returns a list of case ediscoveryNoncustodialDataSource objects for this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Noncustodial Data Sources",
					"value": "Security Cases Ediscovery Cases Create Noncustodial Data Sources",
					"action": "Create nonCustodialDataSources",
					"description": "Create a new ediscoveryNoncustodialDataSource object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Noncustodial Data Sources",
					"value": "Security Cases Ediscovery Cases Delete Noncustodial Data Sources",
					"action": "Delete navigation property noncustodialDataSources for security",
					"description": "Delete navigation property noncustodialDataSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Noncustodial Data Sources",
					"value": "Security Cases Ediscovery Cases Get Noncustodial Data Sources",
					"action": "Get noncustodialDataSources from security",
					"description": "Returns a list of case ediscoveryNoncustodialDataSource objects for this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Noncustodial Data Sources",
					"value": "Security Cases Ediscovery Cases Update Noncustodial Data Sources",
					"action": "Update the navigation property noncustodialDataSources in security",
					"description": "Update the navigation property noncustodialDataSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Noncustodial Data Sources Delete Data Source",
					"value": "Security Cases Ediscovery Cases Noncustodial Data Sources Delete Data Source",
					"action": "Delete navigation property dataSource for security",
					"description": "Delete navigation property dataSource for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/dataSource"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Noncustodial Data Sources Get Data Source",
					"value": "Security Cases Ediscovery Cases Noncustodial Data Sources Get Data Source",
					"action": "Get dataSource from security",
					"description": "User source or SharePoint site data source as non-custodial data source.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/dataSource"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Noncustodial Data Sources Update Data Source",
					"value": "Security Cases Ediscovery Cases Noncustodial Data Sources Update Data Source",
					"action": "Update the navigation property dataSource in security",
					"description": "Update the navigation property dataSource in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/dataSource"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Noncustodial Data Sources Get Last Index Operation",
					"value": "Security Cases Ediscovery Cases Noncustodial Data Sources Get Last Index Operation",
					"action": "Get lastIndexOperation from security",
					"description": "Operation entity that represents the latest indexing for the non-custodial data source.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/lastIndexOperation"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Operations",
					"value": "Security Cases Ediscovery Cases List Operations",
					"action": "List caseOperations",
					"description": "Get a list of the caseOperation objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Operations",
					"value": "Security Cases Ediscovery Cases Create Operations",
					"action": "Create new navigation property to operations for security",
					"description": "Create new navigation property to operations for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Operations",
					"value": "Security Cases Ediscovery Cases Delete Operations",
					"action": "Delete navigation property operations for security",
					"description": "Delete navigation property operations for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/operations/{{$parameter[\"caseOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Operations",
					"value": "Security Cases Ediscovery Cases Get Operations",
					"action": "Get operations from security",
					"description": "Returns a list of case caseOperation objects for this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/operations/{{$parameter[\"caseOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Operations",
					"value": "Security Cases Ediscovery Cases Update Operations",
					"action": "Update the navigation property operations in security",
					"description": "Update the navigation property operations in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/operations/{{$parameter[\"caseOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Review Sets",
					"value": "Security Cases Ediscovery Cases List Review Sets",
					"action": "List reviewSets",
					"description": "Get a list of ediscoveryReviewSet objects associated with an eDiscovery case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Review Sets",
					"value": "Security Cases Ediscovery Cases Create Review Sets",
					"action": "Create reviewSets",
					"description": "Create a new ediscoveryReviewSet object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Review Sets",
					"value": "Security Cases Ediscovery Cases Delete Review Sets",
					"action": "Delete navigation property reviewSets for security",
					"description": "Delete navigation property reviewSets for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Review Sets",
					"value": "Security Cases Ediscovery Cases Get Review Sets",
					"action": "Get reviewSets from security",
					"description": "Returns a list of eDiscoveryReviewSet objects in the case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Review Sets",
					"value": "Security Cases Ediscovery Cases Update Review Sets",
					"action": "Update the navigation property reviewSets in security",
					"description": "Update the navigation property reviewSets in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets List Files",
					"value": "Security Cases Ediscovery Cases Review Sets List Files",
					"action": "List ediscoveryFiles",
					"description": "Get a list of the ediscoveryFile objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Create Files",
					"value": "Security Cases Ediscovery Cases Review Sets Create Files",
					"action": "Create new navigation property to files for security",
					"description": "Create new navigation property to files for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Delete Files",
					"value": "Security Cases Ediscovery Cases Review Sets Delete Files",
					"action": "Delete navigation property files for security",
					"description": "Delete navigation property files for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Get Files",
					"value": "Security Cases Ediscovery Cases Review Sets Get Files",
					"action": "Get files from security",
					"description": "Represents files within the review set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Update Files",
					"value": "Security Cases Ediscovery Cases Review Sets Update Files",
					"action": "Update the navigation property files in security",
					"description": "Update the navigation property files in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Get Files Content",
					"value": "Security Cases Ediscovery Cases Review Sets Get Files Content",
					"action": "Get content for the navigation property files from security",
					"description": "Get content for the navigation property files from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/content"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Update Files Content",
					"value": "Security Cases Ediscovery Cases Review Sets Update Files Content",
					"action": "Update content for the navigation property files in security",
					"description": "Update content for the navigation property files in security",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/content"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Files Get Custodian",
					"value": "Security Cases Ediscovery Cases Review Sets Files Get Custodian",
					"action": "Get custodian from security",
					"description": "Custodians associated with the file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/custodian"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Get Files Extracted Text Content",
					"value": "Security Cases Ediscovery Cases Review Sets Get Files Extracted Text Content",
					"action": "Get extractedTextContent for the navigation property files from security",
					"description": "Get extractedTextContent for the navigation property files from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/extractedTextContent"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Update Files Extracted Text Content",
					"value": "Security Cases Ediscovery Cases Review Sets Update Files Extracted Text Content",
					"action": "Update extractedTextContent for the navigation property files in security",
					"description": "Update extractedTextContent for the navigation property files in security",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/extractedTextContent"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Files List Tags",
					"value": "Security Cases Ediscovery Cases Review Sets Files List Tags",
					"action": "Get tags from security",
					"description": "Tags associated with the file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/tags"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Files Get Tags",
					"value": "Security Cases Ediscovery Cases Review Sets Files Get Tags",
					"action": "Get tags from security",
					"description": "Tags associated with the file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/files/{{$parameter[\"ediscoveryFile-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets List Queries",
					"value": "Security Cases Ediscovery Cases Review Sets List Queries",
					"action": "List queries",
					"description": "Get the list of queries associated with an eDiscovery review set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Create Queries",
					"value": "Security Cases Ediscovery Cases Review Sets Create Queries",
					"action": "Create ediscoveryReviewSetQuery",
					"description": "Create a new ediscoveryReviewSetQuery object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Delete Queries",
					"value": "Security Cases Ediscovery Cases Review Sets Delete Queries",
					"action": "Delete navigation property queries for security",
					"description": "Delete navigation property queries for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries/{{$parameter[\"ediscoveryReviewSetQuery-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Get Queries",
					"value": "Security Cases Ediscovery Cases Review Sets Get Queries",
					"action": "Get queries from security",
					"description": "Represents queries within the review set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries/{{$parameter[\"ediscoveryReviewSetQuery-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Review Sets Update Queries",
					"value": "Security Cases Ediscovery Cases Review Sets Update Queries",
					"action": "Update the navigation property queries in security",
					"description": "Update the navigation property queries in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries/{{$parameter[\"ediscoveryReviewSetQuery-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Searches",
					"value": "Security Cases Ediscovery Cases List Searches",
					"action": "List searches",
					"description": "Get the list of ediscoverySearch resources from an eDiscoveryCase object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Searches",
					"value": "Security Cases Ediscovery Cases Create Searches",
					"action": "Create searches",
					"description": "Create a new ediscoverySearch object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Searches",
					"value": "Security Cases Ediscovery Cases Delete Searches",
					"action": "Delete navigation property searches for security",
					"description": "Delete navigation property searches for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Searches",
					"value": "Security Cases Ediscovery Cases Get Searches",
					"action": "Get searches from security",
					"description": "Returns a list of eDiscoverySearch objects associated with this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Searches",
					"value": "Security Cases Ediscovery Cases Update Searches",
					"action": "Update the navigation property searches in security",
					"description": "Update the navigation property searches in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Get Add To Review Set Operation",
					"value": "Security Cases Ediscovery Cases Searches Get Add To Review Set Operation",
					"action": "Get addToReviewSetOperation from security",
					"description": "Adds the results of the eDiscovery search to the specified reviewSet.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/addToReviewSetOperation"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches List Additional Sources",
					"value": "Security Cases Ediscovery Cases Searches List Additional Sources",
					"action": "List additionalSources",
					"description": "Get the list of additional sources associated with an eDiscovery search.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/additionalSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Create Additional Sources",
					"value": "Security Cases Ediscovery Cases Searches Create Additional Sources",
					"action": "Add additional sources",
					"description": "Create a new additional source associated with an eDiscovery search.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/additionalSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Delete Additional Sources",
					"value": "Security Cases Ediscovery Cases Searches Delete Additional Sources",
					"action": "Delete navigation property additionalSources for security",
					"description": "Delete navigation property additionalSources for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/additionalSources/{{$parameter[\"dataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Get Additional Sources",
					"value": "Security Cases Ediscovery Cases Searches Get Additional Sources",
					"action": "Get additionalSources from security",
					"description": "Adds an additional source to the eDiscovery search.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/additionalSources/{{$parameter[\"dataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Update Additional Sources",
					"value": "Security Cases Ediscovery Cases Searches Update Additional Sources",
					"action": "Update the navigation property additionalSources in security",
					"description": "Update the navigation property additionalSources in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/additionalSources/{{$parameter[\"dataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches List Custodian Sources",
					"value": "Security Cases Ediscovery Cases Searches List Custodian Sources",
					"action": "List custodianSources",
					"description": "Get the list of custodial data sources associated with an eDiscovery search.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/custodianSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Get Custodian Sources",
					"value": "Security Cases Ediscovery Cases Searches Get Custodian Sources",
					"action": "Get custodianSources from security",
					"description": "Custodian sources that are included in the eDiscovery search.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/custodianSources/{{$parameter[\"dataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Get Last Estimate Statistics Operation",
					"value": "Security Cases Ediscovery Cases Searches Get Last Estimate Statistics Operation",
					"action": "List lastEstimateStatisticsOperation",
					"description": "Get the last ediscoveryEstimateOperation objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/lastEstimateStatisticsOperation"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches List Noncustodial Sources",
					"value": "Security Cases Ediscovery Cases Searches List Noncustodial Sources",
					"action": "Get noncustodialSources from security",
					"description": "noncustodialDataSource sources that are included in the eDiscovery search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/noncustodialSources"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Searches Get Noncustodial Sources",
					"value": "Security Cases Ediscovery Cases Searches Get Noncustodial Sources",
					"action": "Get noncustodialSources from security",
					"description": "noncustodialDataSource sources that are included in the eDiscovery search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/noncustodialSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Settings",
					"value": "Security Cases Ediscovery Cases Delete Settings",
					"action": "Delete navigation property settings for security",
					"description": "Delete navigation property settings for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Settings",
					"value": "Security Cases Ediscovery Cases Get Settings",
					"action": "Get ediscoveryCaseSettings",
					"description": "Read the properties and relationships of an ediscoveryCaseSettings object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Settings",
					"value": "Security Cases Ediscovery Cases Update Settings",
					"action": "Update ediscoveryCaseSettings",
					"description": "Update the properties of an ediscoveryCaseSettings object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases List Tags",
					"value": "Security Cases Ediscovery Cases List Tags",
					"action": "List tags",
					"description": "Get a list of eDiscoveryReviewTag objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Create Tags",
					"value": "Security Cases Ediscovery Cases Create Tags",
					"action": "Create tags",
					"description": "Create a new ediscoveryReviewTag object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Delete Tags",
					"value": "Security Cases Ediscovery Cases Delete Tags",
					"action": "Delete navigation property tags for security",
					"description": "Delete navigation property tags for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Get Tags",
					"value": "Security Cases Ediscovery Cases Get Tags",
					"action": "Get tags from security",
					"description": "Returns a list of ediscoveryReviewTag objects associated to this case.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Update Tags",
					"value": "Security Cases Ediscovery Cases Update Tags",
					"action": "Update the navigation property tags in security",
					"description": "Update the navigation property tags in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Tags List Child Tags",
					"value": "Security Cases Ediscovery Cases Tags List Child Tags",
					"action": "Get childTags from security",
					"description": "Returns the tags that are a child of a tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}/childTags"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Tags Get Child Tags",
					"value": "Security Cases Ediscovery Cases Tags Get Child Tags",
					"action": "Get childTags from security",
					"description": "Returns the tags that are a child of a tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}/childTags/{{$parameter[\"ediscoveryReviewTag-id1\"]}}"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Tags Get Parent",
					"value": "Security Cases Ediscovery Cases Tags Get Parent",
					"action": "Get parent from security",
					"description": "Returns the parent tag of the specified tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/tags/{{$parameter[\"ediscoveryReviewTag-id\"]}}/parent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Delete Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Delete Cases"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Get Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Get Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Get Cases"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Update Cases"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Update Cases"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases List Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Create Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Create Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Delete Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Delete Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Get Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Get Ediscovery Cases"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Get Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Update Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Update Ediscovery Cases"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Custodians"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Custodians"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Custodians"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Custodians"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Custodians"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Custodians"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Custodians"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Custodians"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/lastIndexOperation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Last Index Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Last Index Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Last Index Operation"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Site Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Create Site Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Create Site Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Delete Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Delete Site Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Site Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Update Site Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Update Site Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}/site",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Site Sources Get Site"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Site Sources Get Site"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Site Sources Get Site"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Create Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Create Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Delete Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Delete Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Unified Group Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Update Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Update Unified Group Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Unified Group Sources Get Group"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Unified Group Sources Get Group"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Unified Group Sources Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians List User Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Create User Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Create User Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources/{userSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Delete User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Delete User Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources/{userSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Get User Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources/{userSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Update User Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/userSources/{userSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Custodians Update User Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Legal Holds"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List Site Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Create Site Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Create Site Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Delete Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Delete Site Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Get Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Get Site Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Get Site Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Update Site Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Update Site Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}/site",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Site Sources Get Site"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Site Sources Get Site"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Site Sources Get Site"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds List User Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Create User Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Create User Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources/{userSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Delete User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Delete User Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources/{userSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Get User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Get User Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Get User Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources/{userSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Update User Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/userSources/{userSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Legal Holds Update User Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Noncustodial Data Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Noncustodial Data Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Delete Data Source"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Delete Data Source"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Get Data Source"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Get Data Source"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Get Data Source"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/lastIndexOperation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Get Last Index Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Get Last Index Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Noncustodial Data Sources Get Last Index Operation"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Operations"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Review Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Review Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Review Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Review Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Review Sets"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Review Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Review Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Review Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Files"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Create Files"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Create Files"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Delete Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Delete Files"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Files"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Files"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Files Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Files Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Files Content"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/custodian",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files Get Custodian"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files Get Custodian"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files Get Custodian"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/extractedTextContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Files Extracted Text Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/extractedTextContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Files Extracted Text Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/extractedTextContent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Files Extracted Text Content"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files List Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/tags/{ediscoveryReviewTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files Get Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files Get Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Files Get Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets List Queries"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Create Queries"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Create Queries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Delete Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Delete Queries"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Queries"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Get Queries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Queries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Review Sets Update Queries"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Searches"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Searches"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Searches"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Searches"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Searches"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Searches"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Searches"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Searches"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/addToReviewSetOperation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Add To Review Set Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Add To Review Set Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Add To Review Set Operation"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Create Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Create Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Delete Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Delete Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Additional Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Update Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Update Additional Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Custodian Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/custodianSources/{dataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Custodian Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Custodian Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/lastEstimateStatisticsOperation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Last Estimate Statistics Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Last Estimate Statistics Operation"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Last Estimate Statistics Operation"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches List Noncustodial Sources"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/noncustodialSources/{ediscoveryNoncustodialDataSource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Noncustodial Sources"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Searches Get Noncustodial Sources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Settings"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Settings"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Settings"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Create Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Delete Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Get Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Update Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}/childTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags List Child Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}/childTags/{ediscoveryReviewTag-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags Get Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags Get Child Tags"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags Get Child Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags Get Parent"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags Get Parent"
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
						"Security Cases Root"
					],
					"operation": [
						"Security Cases Ediscovery Cases Tags Get Parent"
					]
				}
			}
		},
];
