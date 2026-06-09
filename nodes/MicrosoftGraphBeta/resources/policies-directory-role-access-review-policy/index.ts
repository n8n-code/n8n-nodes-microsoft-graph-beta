import type { INodeProperties } from 'n8n-workflow';

export const policiesDirectoryRoleAccessReviewPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Directory Role Access Review Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Directory Role Access Review Policy",
					"value": "Policies Delete Directory Role Access Review Policy",
					"action": "Delete navigation property directoryRoleAccessReviewPolicy for policies",
					"description": "Delete navigation property directoryRoleAccessReviewPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/directoryRoleAccessReviewPolicy"
						}
					}
				},
				{
					"name": "Policies Get Directory Role Access Review Policy",
					"value": "Policies Get Directory Role Access Review Policy",
					"action": "Get directoryRoleAccessReviewPolicy from policies",
					"description": "Get directoryRoleAccessReviewPolicy from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/directoryRoleAccessReviewPolicy"
						}
					}
				},
				{
					"name": "Policies Update Directory Role Access Review Policy",
					"value": "Policies Update Directory Role Access Review Policy",
					"action": "Update the navigation property directoryRoleAccessReviewPolicy in policies",
					"description": "Update the navigation property directoryRoleAccessReviewPolicy in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/directoryRoleAccessReviewPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/directoryRoleAccessReviewPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Delete Directory Role Access Review Policy"
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
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Delete Directory Role Access Review Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/directoryRoleAccessReviewPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Get Directory Role Access Review Policy"
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
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Get Directory Role Access Review Policy"
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
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Get Directory Role Access Review Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/directoryRoleAccessReviewPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Update Directory Role Access Review Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/directoryRoleAccessReviewPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Directory Role Access Review Policy"
					],
					"operation": [
						"Policies Update Directory Role Access Review Policy"
					]
				}
			}
		},
];
