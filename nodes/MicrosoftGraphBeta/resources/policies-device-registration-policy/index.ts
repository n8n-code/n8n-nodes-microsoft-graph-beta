import type { INodeProperties } from 'n8n-workflow';

export const policiesDeviceRegistrationPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Device Registration Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Get Device Registration Policy",
					"value": "Policies Get Device Registration Policy",
					"action": "Get deviceRegistrationPolicy",
					"description": "Read the properties and relationships of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/deviceRegistrationPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/deviceRegistrationPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Device Registration Policy"
					],
					"operation": [
						"Policies Get Device Registration Policy"
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
						"Policies Device Registration Policy"
					],
					"operation": [
						"Policies Get Device Registration Policy"
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
						"Policies Device Registration Policy"
					],
					"operation": [
						"Policies Get Device Registration Policy"
					]
				}
			}
		},
];
