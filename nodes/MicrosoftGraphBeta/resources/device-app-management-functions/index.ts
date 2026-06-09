import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management Managed App Registrations Get User Ids With Flagged App Registration",
					"value": "Device App Management Managed App Registrations Get User Ids With Flagged App Registration",
					"action": "Invoke function getUserIdsWithFlaggedAppRegistration",
					"description": "Invoke function getUserIdsWithFlaggedAppRegistration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/microsoft.graph.getUserIdsWithFlaggedAppRegistration()"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Mobile App Count",
					"value": "Device App Management Mobile Apps Get Mobile App Count",
					"action": "Invoke function getMobileAppCount",
					"description": "Invoke function getMobileAppCount",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/microsoft.graph.getMobileAppCount(status='{{$parameter[\"status\"]}}')"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Get Top Mobile Apps",
					"value": "Device App Management Mobile Apps Get Top Mobile Apps",
					"action": "Invoke function getTopMobileApps",
					"description": "Invoke function getTopMobileApps",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/microsoft.graph.getTopMobileApps(status='{{$parameter[\"status\"]}}',count={{$parameter[\"count\"]}})"
						}
					}
				},
				{
					"name": "Device App Management Mobile Apps Mobile App Get Related App States",
					"value": "Device App Management Mobile Apps Mobile App Get Related App States",
					"action": "Invoke function getRelatedAppStates",
					"description": "Invoke function getRelatedAppStates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/microsoft.graph.getRelatedAppStates(userPrincipalName='{{$parameter[\"userPrincipalName\"]}}',deviceId='{{$parameter[\"deviceId\"]}}')"
						}
					}
				},
				{
					"name": "Device App Management Vpp Tokens Get Licenses For App",
					"value": "Device App Management Vpp Tokens Get Licenses For App",
					"action": "Invoke function getLicensesForApp",
					"description": "Invoke function getLicensesForApp",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/vppTokens/microsoft.graph.getLicensesForApp(bundleId='{{$parameter[\"bundleId\"]}}')"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/microsoft.graph.getUserIdsWithFlaggedAppRegistration()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Managed App Registrations Get User Ids With Flagged App Registration"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Managed App Registrations Get User Ids With Flagged App Registration"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Managed App Registrations Get User Ids With Flagged App Registration"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Managed App Registrations Get User Ids With Flagged App Registration"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Managed App Registrations Get User Ids With Flagged App Registration"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Managed App Registrations Get User Ids With Flagged App Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/microsoft.graph.getMobileAppCount(status='{status}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Mobile App Count"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"required": true,
			"description": "Usage: status='{status}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Mobile App Count"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/microsoft.graph.getTopMobileApps(status='{status}',count={count})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"required": true,
			"description": "Usage: status='{status}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"required": true,
			"description": "Usage: count={count}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Get Top Mobile Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/microsoft.graph.getRelatedAppStates(userPrincipalName='{userPrincipalName}',deviceId='{deviceId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"required": true,
			"description": "Usage: userPrincipalName='{userPrincipalName}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "deviceId",
			"required": true,
			"description": "Usage: deviceId='{deviceId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Mobile Apps Mobile App Get Related App States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/vppTokens/microsoft.graph.getLicensesForApp(bundleId='{bundleId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
					]
				}
			}
		},
		{
			"displayName": "Bundle ID",
			"name": "bundleId",
			"required": true,
			"description": "Usage: bundleId='{bundleId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
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
						"Device App Management Functions"
					],
					"operation": [
						"Device App Management Vpp Tokens Get Licenses For App"
					]
				}
			}
		},
];
