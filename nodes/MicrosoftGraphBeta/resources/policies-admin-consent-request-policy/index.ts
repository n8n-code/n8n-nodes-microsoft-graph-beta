import type { INodeProperties } from 'n8n-workflow';

export const policiesAdminConsentRequestPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Admin Consent Request Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Admin Consent Request Policy",
					"value": "Policies Delete Admin Consent Request Policy",
					"action": "Delete navigation property adminConsentRequestPolicy for policies",
					"description": "Delete navigation property adminConsentRequestPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/adminConsentRequestPolicy"
						}
					}
				},
				{
					"name": "Policies Get Admin Consent Request Policy",
					"value": "Policies Get Admin Consent Request Policy",
					"action": "Get adminConsentRequestPolicy",
					"description": "Read the properties and relationships of an adminConsentRequestPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/adminConsentRequestPolicy"
						}
					}
				},
				{
					"name": "Policies Update Admin Consent Request Policy",
					"value": "Policies Update Admin Consent Request Policy",
					"action": "Update adminConsentRequestPolicy",
					"description": "Update the properties of an adminConsentRequestPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/adminConsentRequestPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/adminConsentRequestPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Delete Admin Consent Request Policy"
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
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Delete Admin Consent Request Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/adminConsentRequestPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Get Admin Consent Request Policy"
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
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Get Admin Consent Request Policy"
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
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Get Admin Consent Request Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/adminConsentRequestPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Update Admin Consent Request Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/adminConsentRequestPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Admin Consent Request Policy"
					],
					"operation": [
						"Policies Update Admin Consent Request Policy"
					]
				}
			}
		},
];
