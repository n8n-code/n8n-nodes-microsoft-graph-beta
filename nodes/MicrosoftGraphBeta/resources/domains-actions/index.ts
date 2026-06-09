import type { INodeProperties } from 'n8n-workflow';

export const domainsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Actions"
					]
				}
			},
			"options": [
				{
					"name": "Domains Domain Force Delete",
					"value": "Domains Domain Force Delete",
					"action": "Invoke action forceDelete",
					"description": "Deletes a domain using an asynchronous operation. Prior to calling forceDelete, you must update or remove any references to **Exchange** as the provisioning service. The following actions are performed as part of this operation: After the domain deletion completes, API operations for the deleted domain will return a 404 HTTP response code. To verify deletion of a domain, you can perform a get domain. If the domain was successfully deleted, a 404 HTTP response code will be returned in the response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/microsoft.graph.forceDelete"
						}
					}
				},
				{
					"name": "Domains Domain Promote",
					"value": "Domains Domain Promote",
					"action": "Invoke action promote",
					"description": "Promote a verified subdomain to the root domain. A verified domain has its **isVerified** property set to `true`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/microsoft.graph.promote"
						}
					}
				},
				{
					"name": "Domains Domain Verify",
					"value": "Domains Domain Verify",
					"action": "Invoke action verify",
					"description": "Validates the ownership of the domain.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/microsoft.graph.verify"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /domains/{domain-id}/microsoft.graph.forceDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Actions"
					],
					"operation": [
						"Domains Domain Force Delete"
					]
				}
			}
		},
		{
			"displayName": "Disable User Accounts",
			"name": "disableUserAccounts",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "disableUserAccounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Actions"
					],
					"operation": [
						"Domains Domain Force Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/microsoft.graph.promote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Actions"
					],
					"operation": [
						"Domains Domain Promote"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/microsoft.graph.verify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Actions"
					],
					"operation": [
						"Domains Domain Verify"
					]
				}
			}
		},
];
