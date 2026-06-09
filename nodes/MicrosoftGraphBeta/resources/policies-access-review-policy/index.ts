import type { INodeProperties } from 'n8n-workflow';

export const policiesAccessReviewPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Access Review Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Access Review Policy",
					"value": "Policies Delete Access Review Policy",
					"action": "Delete navigation property accessReviewPolicy for policies",
					"description": "Delete navigation property accessReviewPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/accessReviewPolicy"
						}
					}
				},
				{
					"name": "Policies Get Access Review Policy",
					"value": "Policies Get Access Review Policy",
					"action": "Get accessReviewPolicy",
					"description": "Read the properties and relationships of an accessReviewPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/accessReviewPolicy"
						}
					}
				},
				{
					"name": "Policies Update Access Review Policy",
					"value": "Policies Update Access Review Policy",
					"action": "Update accessReviewPolicy",
					"description": "Update the properties of an accessReviewPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/accessReviewPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/accessReviewPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Delete Access Review Policy"
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
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Delete Access Review Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/accessReviewPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Get Access Review Policy"
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
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Get Access Review Policy"
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
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Get Access Review Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/accessReviewPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Update Access Review Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/accessReviewPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Access Review Policy"
					],
					"operation": [
						"Policies Update Access Review Policy"
					]
				}
			}
		},
];
