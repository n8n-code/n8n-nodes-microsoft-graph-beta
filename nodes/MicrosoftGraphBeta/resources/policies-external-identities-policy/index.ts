import type { INodeProperties } from 'n8n-workflow';

export const policiesExternalIdentitiesPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies External Identities Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete External Identities Policy",
					"value": "Policies Delete External Identities Policy",
					"action": "Delete navigation property externalIdentitiesPolicy for policies",
					"description": "Delete navigation property externalIdentitiesPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/externalIdentitiesPolicy"
						}
					}
				},
				{
					"name": "Policies Get External Identities Policy",
					"value": "Policies Get External Identities Policy",
					"action": "Get externalIdentitiesPolicy",
					"description": "Read the properties and relationships of the tenant-wide externalIdentitiesPolicy object that controls whether external users can leave an Azure AD tenant via self-service controls.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/externalIdentitiesPolicy"
						}
					}
				},
				{
					"name": "Policies Update External Identities Policy",
					"value": "Policies Update External Identities Policy",
					"action": "Update externalIdentitiesPolicy",
					"description": "Update the settings of the tenant-wide externalIdentitiesPolicy object that controls whether external users can leave an Azure AD tenant via self-service controls.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/externalIdentitiesPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/externalIdentitiesPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Delete External Identities Policy"
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
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Delete External Identities Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/externalIdentitiesPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Get External Identities Policy"
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
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Get External Identities Policy"
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
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Get External Identities Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/externalIdentitiesPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Update External Identities Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/externalIdentitiesPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies External Identities Policy"
					],
					"operation": [
						"Policies Update External Identities Policy"
					]
				}
			}
		},
];
